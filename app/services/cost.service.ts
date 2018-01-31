import { Injectable } from "@angular/core";
import { ObservableArray } from "tns-core-modules/data/observable-array/observable-array";
import firebase = require('nativescript-plugin-firebase');

import { Cost } from '../common/protocol';
import { Config } from "../common/config";
import { Utils } from "../common/utils";
import { Observable } from "tns-core-modules/ui/editable-text-base/editable-text-base";

@Injectable()
export class CostService {
    private _costs: ObservableArray<any> = new ObservableArray();
    private listeners;

    get costs(): ObservableArray<any> {
        return this._costs;
    }

    getCosts(): Promise<any> {
        const that = this;
        return new Promise(function(success, error) {
            firebase.addValueEventListener(
                (result) => {
                    console.log('objectToArray: ', JSON.stringify(result));
                    that._costs = new ObservableArray(that.objectToArray(result.value));
                    return success();
                }, `/${Config.getUserToken()}/costs`).then(
                listenerWrapper => that.listeners = listenerWrapper.listeners
            );
        }.bind(this));
    }
    
    filterCosts(dateRange): Promise<any> {
        const that = this;
        const parameters = {
            singleEvent: true,
            orderBy: { 
                type: firebase.QueryOrderByType.CHILD, 
                value: 'changesDate' 
            },
            ranges: [
                {
                    type: firebase.QueryRangeType.START_AT,
                    value: Utils.dateToYMD(new Date(dateRange.startDate))
                },
                {
                    type: firebase.QueryRangeType.END_AT,
                    value: Utils.dateToYMD(new Date(dateRange.endDate))
                }
            ]
        };

        console.log(JSON.stringify(parameters));

        return new Promise(function(success, error) {
            firebase.query(
                result => {
                    console.log('objectToArray: ', JSON.stringify(result));
                    that._costs = new ObservableArray(that.objectToArray(result.value));
                    return success();
                }, 
                `/${this.userid}/costs`, 
                parameters
            );
        }.bind(this));
    }

    getCost(id: string): Cost {
        return this._costs.filter(cost => cost.id === id)[0];
    }

    addCost(newCost: Cost) {
        firebase.push(`/${Config.getUserToken()}/costs`, newCost).then(result => {
            newCost.id = result.key;
            this._costs.unshift(newCost);
        });
    }

    updateCost(costForUpdate: Cost) {
        return firebase.update(`/${Config.getUserToken()}/costs/${costForUpdate.id}`, costForUpdate);
    }
    
    deleteCost(costForDelete: Cost) {
        firebase.remove(`/${Config.getUserToken()}/costs/${costForDelete.id}`).then(result => {
            const index = this._costs.indexOf(costForDelete);
            this._costs.splice(index, 1);
            alert(costForDelete.quantity + " removed!");
        });
    }

    removeListeners() {
        firebase.removeEventListeners(
            this.listeners,
            `/${Config.getUserToken()}/costs`
        );
    }

    private objectToArray(object: any): Array<Cost> {
        let arr: any = [];
        for (const key in object) {
            let element = object[key];
            element.id = key;
            arr.push(element);
        }
        return arr;
    }
}

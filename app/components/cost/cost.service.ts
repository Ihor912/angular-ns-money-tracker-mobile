import { Injectable } from "@angular/core";
import * as Rx from 'rxjs/Rx';

import firebase = require('nativescript-plugin-firebase');
import { Cost } from '../../common/protocol';
import { Config } from "../../common/config";

@Injectable()
export class CostService {
    private _costs: Cost[] = [];
    private userid = Config.getUserToken();
    private listeners;

    get costs(): Cost[] {
        return this._costs;
    }

    getCosts(): Promise<any> {
        const that = this;
        return new Promise(function(success, error) {
            firebase.addValueEventListener(
                (result) => {
                    const costs = that.objectToArray(result.value);
                    that._costs = costs;
                    return success();
                }, `/${this.userid}/costs`).then(
                listenerWrapper => that.listeners = listenerWrapper.listeners
            );
        }.bind(this));
    }

    getCost(id: string): Cost {
        return this._costs.filter(cost => cost.id === id)[0];
    }

    addCost(newCost: Cost) {
        firebase.push(`/${this.userid}/costs`, newCost).then(result => {
            newCost.id = result.key;
            this._costs.unshift(newCost);
        });
    }

    updateCost(costForUpdate: Cost) {
        return firebase.update(`/${this.userid}/costs/${costForUpdate.id}`, costForUpdate);
    }
    
    deleteCost(costForDelete: Cost) {
        firebase.remove(`/${this.userid}/costs/${costForDelete.id}`).then(result => {
            const index = this._costs.indexOf(costForDelete);
            this._costs.splice(index, 1);
            alert(costForDelete.quantity + " removed!");
        });
    }

    removeListeners() {
        firebase.removeEventListeners(
            this.listeners,
            `/${this.userid}/costs`
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

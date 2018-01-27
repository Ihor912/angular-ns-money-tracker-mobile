import { Injectable } from '@angular/core';
import * as Rx from 'rxjs/Rx';

import { Cost } from '../../common/protocol';

@Injectable()
export class CostService {
    private _costsSource: Rx.BehaviorSubject<Cost[]>;
    private _costs: Rx.Observable<Cost[]>;

    constructor() {
        this._costsSource = new Rx.BehaviorSubject<Cost[]>(this.costsCollection);
        this._costs = this._costsSource.asObservable();
    }

    private costsCollection = new Array<Cost>(
        { id: 0, quantity: 310, type: "Products", changesDate: "Jul 01 2017", isFavorite: false },
        { id: 1, quantity: 25, type: "Products", changesDate: "Aug 25 2017", isFavorite: false },
        { id: 2, quantity: 127, type: "ForHome", changesDate: "Aug 30 2017", isFavorite: false },
        { id: 3, quantity: 80, type: "Products", changesDate: "Aug 29 2010", isFavorite: false },
        { id: 4, quantity: 32, type: "Products", changesDate: "Nov 13 2017", isFavorite: false },
        { id: 5, quantity: 235, type: "Products", changesDate: "Jan 31 2017", isFavorite: false },
        { id: 6, quantity: 98, type: "ForHome", changesDate: "Feb 20 2017", isFavorite: false },
        { id: 7, quantity: 105, type: "Products", changesDate: "Oct 01 2017", isFavorite: false },
        { id: 8, quantity: 80, type: "Products", changesDate: "Aug 29 2017", isFavorite: false },
        { id: 9, quantity: 75, type: "Products", changesDate: "Aug 08 2017", isFavorite: false },
        { id: 10, quantity: 235, type: "Products", changesDate: "Aug 26 2017", isFavorite: false },
        { id: 11, quantity: 264, type: "ForHome", changesDate: "May 30 2017", isFavorite: false },
        { id: 12, quantity: 78, type: "Products", changesDate: "April 04 2017", isFavorite: false }
    );

    public get costs(): Rx.Observable<Cost[]> {
        return this._costs;
    }

    getCost(id: number): Cost {
        return this._costsSource.getValue().filter(cost => cost.id === id)[0];
    }

    addCost(newCost: Cost) {
        let activeCosts = this._costsSource.getValue();
        activeCosts.unshift(newCost);
        this._costsSource.next(activeCosts);
    }

    deleteCost(costForDelete: Cost) {
        let activeCosts = this._costsSource.getValue();
        var index = activeCosts.indexOf(costForDelete);
        activeCosts.splice(index, 1);
        this._costsSource.next(activeCosts);

        alert(costForDelete.quantity + " removed!");
    }
}

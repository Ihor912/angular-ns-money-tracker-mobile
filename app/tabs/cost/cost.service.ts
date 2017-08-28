import { Injectable } from "@angular/core";
import * as Rx from "rxjs/Rx";

import { Cost } from "./cost";

@Injectable()
export class CostService {
    private costsListSource: Rx.BehaviorSubject<Cost[]>;
    private backing_costsListObservable: Rx.Observable<Cost[]>;

    constructor() {
        this.costsListSource = new Rx.BehaviorSubject<Cost[]>(this.costs);
        this.backing_costsListObservable = this.costsListSource.asObservable();
    }

    private costs = new Array<Cost>(
        { id: 0, quantity: 310, type: "Products", changesDate: "Jul 01 2017" },
        { id: 1, quantity: 25, type: "Products", changesDate: "Aug 03 2017" },
        { id: 2, quantity: 127, type: "ForHome", changesDate: "Jun 09 2017" },
        { id: 3, quantity: 80, type: "Products", changesDate: "May 22 2017" },
        { id: 4, quantity: 32, type: "Products", changesDate: "Nov 13 2017" },
        { id: 5, quantity: 235, type: "Products", changesDate: "Jan 31 2017" },
        { id: 6, quantity: 98, type: "ForHome", changesDate: "Feb 20 2017" },
        { id: 7, quantity: 105, type: "Products", changesDate: "Oct 01 2017" },
        { id: 8, quantity: 80, type: "Products", changesDate: "Aug 15 2017" },
        { id: 9, quantity: 75, type: "Products", changesDate: "Aug 08 2017" },
        { id: 10, quantity: 235, type: "Products", changesDate: "Aug 26 2017" },
        { id: 11, quantity: 264, type: "ForHome", changesDate: "May 30 2017" },
        { id: 12, quantity: 78, type: "Products", changesDate: "April 04 2017" }
    );

    public get costsListObservable(): Rx.Observable<Cost[]> {
        return this.backing_costsListObservable;
    }

    getCost(id: number): Cost {
        return this.costsListSource.getValue().filter(cost => cost.id === id)[0];
    }

    addCost(newCost: Cost) {
        let activeCosts = this.costsListSource.getValue();
        activeCosts.push(newCost);
        this.costsListSource.next(activeCosts);
    }

    deleteCost(costForDelete: Cost) {
        let activeCosts = this.costsListSource.getValue();
        var index = activeCosts.indexOf(costForDelete);
        activeCosts.splice(index, 1);
        this.costsListSource.next(activeCosts);

        alert(costForDelete.quantity + " removed!");
    }
}

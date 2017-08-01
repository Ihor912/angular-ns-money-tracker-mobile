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
        { id: 0, quantity: 310, type: "Products" },
        { id: 1, quantity: 25, type: "Products" },
        { id: 2, quantity: 127, type: "ForHome" },
        { id: 3, quantity: 80, type: "Products" },
        { id: 4, quantity: 32, type: "Products" },
        { id: 5, quantity: 235, type: "Products" },
        { id: 6, quantity: 98, type: "ForHome" },
        { id: 7, quantity: 105, type: "Products" },
        { id: 8, quantity: 80, type: "Products" },
        { id: 9, quantity: 75, type: "Products" },
        { id: 10, quantity: 235, type: "Products" },
        { id: 11, quantity: 264, type: "ForHome" },
        { id: 12, quantity: 78, type: "Products" }
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
}

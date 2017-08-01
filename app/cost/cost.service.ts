import { Injectable } from "@angular/core";

import { Cost } from "./cost";

@Injectable()
export class CostService {
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

    getCosts(): Cost[] {
        return this.costs;
    }

    getCost(id: number): Cost {
        return this.costs.filter(cost => cost.id === id)[0];
    }

    addCost(newCost: Cost) {
        this.costs.push(newCost);
    }
}

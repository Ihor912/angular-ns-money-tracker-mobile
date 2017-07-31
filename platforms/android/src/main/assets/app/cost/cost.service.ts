import { Injectable } from "@angular/core";

import { Cost } from "./cost";

@Injectable()
export class CostService {
    private costs = new Array<Cost>(
        { id: 0, quantity: 310, type: "Products" }
    );

    getCosts(): Cost[] {
        return this.costs;
    }

    getCost(id: number): Cost {
        return this.costs.filter(cost => cost.id === id)[0];
    }
}

import { Component, OnInit } from "@angular/core";

import { Cost } from "./cost";
import { CostService } from "./cost.service";

@Component({
    selector: "costs",
    moduleId: module.id,
    templateUrl: "./costs.component.html",
})
export class CostsComponent implements OnInit {
    costs: Cost[];

    constructor(private costService: CostService) { }

    ngOnInit(): void {
        this.costs = this.costService.getCosts();
    }
}
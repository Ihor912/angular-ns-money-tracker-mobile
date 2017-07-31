import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { Cost } from "./cost";
import { CostService } from "./cost.service";

@Component({
    selector: "details",
    moduleId: module.id,
    templateUrl: "./cost-detail.component.html",
})
export class CostDetailComponent implements OnInit {
    cost: Cost;

    constructor(
        private costService: CostService,
        private route: ActivatedRoute
    ) { }

    ngOnInit(): void {
        const id = +this.route.snapshot.params["id"];
        this.cost = this.costService.getCost(id);
    }
}

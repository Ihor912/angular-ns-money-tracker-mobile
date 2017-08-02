import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router";

import { Cost } from "./cost";
import { CostService } from "./cost.service";

@Component({
    selector: "cost-edit",
    moduleId: module.id,
    templateUrl: "./cost-edit.component.html",
    styleUrls: ["./cost-edit.component.css"]
})
export class CostEditComponent implements OnInit {
    cost: Cost;
    rollbackCost: Cost;

    constructor(
        private costService: CostService,
        private route: ActivatedRoute,
        private routerExtensions: RouterExtensions
    ) { }

    ngOnInit(): void {
        const id = +this.route.snapshot.params["id"];
        this.cost = this.costService.getCost(id);
        this.saveRollbackCost(this.cost);
    }

    saveRollbackCost(cost: Cost): void {
        this.rollbackCost = new Cost();
        this.rollbackCost.quantity = cost.quantity;
        this.rollbackCost.type = cost.type;
    }

    onCancelButtonTap(): void{
        this.cost.quantity = this.rollbackCost.quantity;
        this.cost.type = this.rollbackCost.type;
        this.routerExtensions.back();
    }
    
    onDoneButtonTap(): void{
        this.routerExtensions.back();
    }
}

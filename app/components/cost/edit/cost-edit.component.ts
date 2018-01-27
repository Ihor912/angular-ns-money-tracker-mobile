import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterExtensions } from 'nativescript-angular/router';

import { CostService } from '../cost.service';
import { Cost } from '../../../common/protocol';

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
        this.rollbackCost.changesDate = cost.changesDate;
    }

    onCancelButtonTap(): void{
        this.cost.quantity = this.rollbackCost.quantity;
        this.cost.type = this.rollbackCost.type;
        this.cost.changesDate = this.rollbackCost.changesDate
        this.routerExtensions.back();
    }
    
    onDoneButtonTap(): void{
        let date = new Date().toLocaleDateString();
        this.cost.changesDate = this.formatDateString(date);
        this.routerExtensions.back();
    }

    private formatDateString(dateString:string):string {
        return (new Date(dateString)).toDateString().slice(4);
    }
}

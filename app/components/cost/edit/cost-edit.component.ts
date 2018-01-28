import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterExtensions } from 'nativescript-angular/router';

import { CostService } from '../cost.service';
import { Cost } from '../../../common/protocol';
import { Utils } from '../../../common/utils';

@Component({
    selector: "cost-edit",
    moduleId: module.id,
    templateUrl: "./cost-edit.component.html",
    styleUrls: ["./cost-edit.component.css"]
})
export class CostEditComponent implements OnInit {
    cost: Cost;
    costForUpdate: Cost;
    rollbackCost: Cost;

    constructor(
        private costService: CostService,
        private route: ActivatedRoute,
        private routerExtensions: RouterExtensions
    ) { }

    ngOnInit(): void {
        const id = this.route.snapshot.params["id"];
        this.cost = this.costService.getCost(id);
        this.costForUpdate = Object.assign({}, this.cost);
    }

    onCancelButtonTap(): void{
        this.routerExtensions.back();
    }
    
    onDoneButtonTap(): void{
        this.costService.updateCost(this.costForUpdate).then(result => {
            this.cost.quantity = this.costForUpdate.quantity;
            this.cost.type = this.costForUpdate.type;
            // let date = new Date().toLocaleDateString();
            // this.cost.changesDate = Utils.formatDateString(date);
            this.routerExtensions.back();
        });
    }
}

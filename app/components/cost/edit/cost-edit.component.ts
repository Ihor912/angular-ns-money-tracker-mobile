import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterExtensions } from 'nativescript-angular/router';

import { CostService } from '../../../services/cost.service';
import { Cost } from '../../../common/protocol';
import { DatePicker } from 'tns-core-modules/ui/date-picker/date-picker';
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
    costDate: string;

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

    onDatePickerLoaded(args) {
        let datePicker = <DatePicker>args.object;
        datePicker.date = new Date(this.cost.changesDate);
        this.costDate = datePicker.date.toDateString();
    }

    onDateChange(args) {
        this.costDate = args.value;
    }

    onCancelButtonTap(): void {
        this.routerExtensions.back();
    }
    
    onDoneButtonTap(): void {
        this.costForUpdate.changesDate = (new Date(this.costDate)).toISOString();
        this.costForUpdate.changesMonth = Utils.getMonthAndYear(new Date(this.costDate));

        this.costService.updateCost(this.costForUpdate).then(result => {
            this.cost.quantity = this.costForUpdate.quantity;
            this.cost.type = this.costForUpdate.type;
            this.cost.changesDate = this.costForUpdate.changesDate;
            this.cost.changesMonth = this.costForUpdate.changesMonth;
            
            this.routerExtensions.back();
        });
    }
}

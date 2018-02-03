import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';
import firebase = require('nativescript-plugin-firebase');
import { TextField } from 'ui/text-field';

import { Config } from '../../common/config';
import { Cost } from '../../common/protocol';
import { Utils } from '../../common/utils';
import { ListComponent } from '../../components/list/list.component';
import { CostService } from '../../services/cost.service';

@Component({
    selector: "costs",
    moduleId: module.id,
    templateUrl: "./costs.component.html",
    styleUrls: ["./cost.component.css"]
})
export class CostsComponent implements OnInit {
    @ViewChild("newCostInput") newCostInput: ElementRef;
    @ViewChild("list") list: ListComponent;
    
    private _dateRange = null;
    @Input() set dateRange(value: any) {
        this._dateRange = value;
        if(value['startDate']) {
            this.filterData(value);
        }
    }

    constructor(private router: RouterExtensions, private costService: CostService) { }

    ngOnInit() {
        this.reloadData();
    }

    reloadData() {
        const that = this;
        that.list.showLoadingIndicator();
        this.costService.getCosts().then(result => {
            that.list.hideLoadingIndicator();
            that.list.refresh();
        });
    }

    filterData(dateRange) {
        const that = this;
        that.list.showLoadingIndicator();
        this.costService.filterCosts(dateRange).then(result => {
            that.list.hideLoadingIndicator();
            that.list.refresh();
        });
    }

    add() {
        let textField = <TextField>this.newCostInput.nativeElement;
        textField.dismissSoftInput();

        if (textField.text.trim() === "") {
            alert("Невірне значення!");
            return;
        }

        let cost: Cost = new Cost();
        cost.quantity = Number(textField.text);
        cost.type = "Загальне";
        cost.changesDate = (new Date()).toISOString();
        cost.changesMonth = Utils.getMonthAndYear(new Date());
        cost.isFavorite = false;

        this.costService.addCost(cost);
        textField.text = "";
    }

    logout() {
        firebase.logout()
            .then(() => {
                alert("Ви успішно вийшли!");
                Config.removeAllUserInfo();
                this.costService.removeListeners();
                this.router.navigate(["/login"], { clearHistory: true });
            }, (error) => {
                alert("Error: " + error);
            });
    }

    private pullToRefresh() {
        this.reloadData();
    }
}
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';
import firebase = require('nativescript-plugin-firebase');
import { TextField } from 'ui/text-field';

import { Cost } from '../../common/protocol';
import { CostService } from '../../services/cost.service';
import { Config } from '../../common/config';
import { ListComponent } from '../../components/list/list.component';

@Component({
    selector: "costs",
    moduleId: module.id,
    templateUrl: "./costs.component.html",
    styleUrls: ["./cost.component.css"]
})
export class CostsComponent implements OnInit {

    @ViewChild("newCostTextField") newCostTextField: ElementRef;
    @ViewChild("list") list: ListComponent;

    constructor(private router: RouterExtensions, private costService: CostService) { }

    ngOnInit(): void {
        const that = this;

        that.list.reloadList();
        this.costService.getCosts().then(result => {
            that.list.stopReloadList();
            that.list.refresh();
        });
    }

    add() {
        let textField = <TextField>this.newCostTextField.nativeElement;
        textField.dismissSoftInput();

        if (textField.text.trim() === "") {
            alert("Incorrect Value");
            return;
        }

        let cost: Cost = new Cost();
        cost.quantity = textField.text;
        cost.type = "No Type";
        cost.changesDate = (new Date()).toISOString();
        cost.isFavorite = false;

        this.costService.addCost(cost);
        textField.text = "";
    }

    logout() {
        firebase.logout()
        .then(() => {
            alert("Logged out successfully!");
            Config.removeAllUserInfo();
            this.costService.removeListeners();
            this.router.navigate(["/login"], { clearHistory: true });
        }, (error) => {
            alert("Error: " + error);
        });
    }

    private pullToRefresh() {
        const that = this;
        this.costService.getCosts().then(result => {
            that.list.stopReloadList();
            that.list.refresh();
        });
    }
}
import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { TextField } from "ui/text-field";

import { Cost } from "./cost";
import { CostService } from "./cost.service";

@Component({
    selector: "costs",
    moduleId: module.id,
    templateUrl: "./costs.component.html",
    styleUrls: ["./cost.component.css"]
})
export class CostsComponent implements OnInit {

    @ViewChild("newCostTextField") newCostTextField: ElementRef;

    constructor(private costService: CostService) { }

    ngOnInit(): void {
        // this.costService.costsListObservable.subscribe((costs) => {
        //     if(costs) {
        //         this.costs = costs;
        //     }
        // });
    }

    add() {
        let textField = <TextField>this.newCostTextField.nativeElement;
        textField.dismissSoftInput();

        if (textField.text.trim() === "") {
            alert("Incorrect Value");
            return;
        }

        let cost:Cost = new Cost();
        cost.id = Math.random();
        cost.quantity = Number(textField.text);
        cost.type = "TestType";
        cost.changesDate = (new Date()).toDateString();
        cost.isFavorite = false;

        this.costService.addCost(cost);
        textField.text = "";
    }
}
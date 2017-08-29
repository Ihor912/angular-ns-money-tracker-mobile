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
    newCost: string = '';

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
        if (this.newCost.trim() === "") {
            alert("Enter a grocery item");
            return;
        }
        let textField = <TextField>this.newCostTextField.nativeElement;
        textField.dismissSoftInput();

        let cost:Cost = new Cost();
        cost.id = Math.random();
        cost.quantity = Number(this.newCost);
        cost.type = "TestType";
        cost.changesDate = Date.now().toString();
        cost.isFavorite = false;

        this.costService.addCost(cost);
        this.newCost = "";
    }
}
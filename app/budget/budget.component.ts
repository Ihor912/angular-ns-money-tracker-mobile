import { Component, ViewChild, ElementRef, OnInit } from "@angular/core";
import { TextField } from "ui/text-field";
import { RouterExtensions } from "nativescript-angular/router";

import { BudgetService } from "./budget.service";

@Component({
   selector: "budget",
   moduleId: module.id,
   templateUrl: "./budget.component.html",
   styleUrls: ["./budget.component.css"]
})
export class BudgetComponent {

    @ViewChild("editBudgetTextField") editBudgetTextField: ElementRef;
    private state: string = 'read';

    constructor(
        private routerExtensions: RouterExtensions,
        private budgetService: BudgetService
    ) {}

    onEditButtonTap() {
        this.state = 'edit';
    }

    onSaveButtonTap() {
        let textField = <TextField>this.editBudgetTextField.nativeElement;
        textField.dismissSoftInput();

        if (textField.text.trim() === "") {
            alert("Incorrect Value");
            return;
        }

        this.budgetService.budget = Number(textField.text);
        this.state = 'read';
    }

    onCancelButtonTap() {
        this.state = 'read';
    }

    onBackTap() {
        this.routerExtensions.back();
    }
}
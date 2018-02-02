import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';
import { TextField } from 'ui/text-field';

import { BudgetService } from '../../services/budget.service';

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

    ngOnInit() {
        this.budgetService.getBudget();
    }

    onEditButtonTap() {
        this.state = 'edit';
    }

    onSaveButtonTap() {
        let textField = <TextField>this.editBudgetTextField.nativeElement;
        textField.dismissSoftInput();

        if (textField.text.trim() === "") {
            alert("Неправильне значення!");
            return;
        }

        this.budgetService.setBudget(Number(textField.text));
        this.state = 'read';
    }

    onCancelButtonTap() {
        this.state = 'read';
    }

    onBackTap() {
        this.routerExtensions.back();
    }
}
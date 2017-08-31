import { Injectable } from "@angular/core";

@Injectable()
export class BudgetService {
    private _budget: number = 3000;
    public budgetForDay: number = 0;

    private getDayBudget() {
        let currentDaysMonth = this.daysInCurrentMonth();
        this.budgetForDay = Number((this._budget / currentDaysMonth).toFixed(2));
    }

    private daysInCurrentMonth() {
        let dateNow = new Date();  
        return new Date(dateNow.getFullYear(), dateNow.getMonth()+1, 0).getDate();
    }

    public set budget(value : number) {
        this._budget = value;
        this.getDayBudget();
    }
    
    public get budget() : number {
        return this._budget;
    }
    
}
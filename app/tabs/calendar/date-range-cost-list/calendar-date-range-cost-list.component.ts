import { Component, Output,Input, EventEmitter } from "@angular/core";

import { Cost } from "../../../tabs/cost/cost";
import { CostService } from "../../../tabs/cost/cost.service";

@Component({
    selector: "calendar-date-range-cost-list",
    moduleId: module.id,
    templateUrl: "./calendar-date-range-cost-list.component.html",
    styleUrls: ["./calendar-date-range-cost-list.component.css"],
})
export class CalendarDateRangeCostListComponent {
   
    @Output() stateChanged = new EventEmitter();
    @Input() filteredCosts:Array<Cost>;

    onTap(){
        this.stateChanged.next("");
    }
}

import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Cost } from '../../../components/cost/cost';

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

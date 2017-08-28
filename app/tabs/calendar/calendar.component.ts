import { Component, Input } from "@angular/core";

import { CostService } from "../cost/cost.service";
import { Cost } from "../cost/cost";


@Component({
    selector: "calendar",
    moduleId: module.id,
    templateUrl: "./calendar.component.html",
    styleUrls: ["./calendar.component.css"]
})
export class CalendarComponent {
    private state: string = 'dateSelect';
    private costList:Array<Cost> = new Array<Cost>();
    public filteredCostList:Array<Cost> = new Array<Cost>();

    constructor(private costService:CostService){}
    
    onSendDateChange(args) {
        let startDateRange = new Date(args.startDate);
        let endDateRange = new Date(args.endDate);

        this.costService.costsListObservable.subscribe((costs) => {
            for (var index = 0; index < costs.length; index++) {
                let currentCostDate = new Date(costs[index].changesDate);
                if(currentCostDate >= startDateRange && currentCostDate <= endDateRange) {
                    this.costList.push(costs[index]);
                }
            }
            this.filteredCostList = this.costList;
            //this.costList.pop();
            //this.filterDate.pop();
        });
    }

    onDateRangeStateChangedHandler() {
        this.state = 'dateFilteredList';
    }

    onDateRangeCostListChangedHandler() {
        this.state = 'dateSelect';
    }
}
 

 

     

    
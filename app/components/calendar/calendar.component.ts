import { Component } from '@angular/core';

import { CostService } from '../cost/cost.service';
import { Cost } from '../../common/protocol';


@Component({
    selector: "calendar",
    moduleId: module.id,
    templateUrl: "./calendar.component.html",
    styleUrls: ["./calendar.component.css"]
})
export class CalendarComponent {
    private state: string = 'dateSelect';
    public filteredCosts: Cost[] = new Array<Cost>();
    public allCosts: Cost[] = new Array<Cost>();

    constructor(private costService:CostService){}

    ngOnInit() {
        this.costService.costsListObservable.subscribe((costs) => {
            this.allCosts = costs;
        });
    }
    
    onSendDateChange(args) {
        let startDateRange = new Date(args.startDate);
        let endDateRange = new Date(args.endDate);
        let costs: Cost[] = new Array<Cost>();

        this.allCosts.forEach(cost => {
            let currentCostDate = new Date(cost.changesDate);
            if(currentCostDate >= startDateRange && currentCostDate <= endDateRange) {
                costs.push(cost);
            }
        });
        this.filteredCosts = costs;
        //this.costList.pop();
        //this.filterDate.pop();
    }

    onDateRangeStateChangedHandler() {
        this.state = 'dateFilteredList';
    }

    onDateRangeCostListChangedHandler() {
        this.state = 'dateSelect';
    }
}
 

 

     

    
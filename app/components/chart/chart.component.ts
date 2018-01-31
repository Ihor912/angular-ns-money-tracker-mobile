import { Component, EventEmitter, Output } from '@angular/core';
import { ObservableArray } from 'tns-core-modules/data/observable-array/observable-array';
import { SegmentedBar, SegmentedBarItem } from "ui/segmented-bar";

import { CostService } from '../../services/cost.service';

@Component({
    selector: "chart",
    moduleId: module.id,
    templateUrl: "./chart.component.html",
    styleUrls: ["./chart.component.css"]
})
export class ChartComponent {
    private barButtons: Array<SegmentedBarItem> = [];
    private barButtonsSelectedIndex = 0;
    private pieItems: ObservableArray<any> = new ObservableArray();

    constructor(private costService: CostService){
        this.initSegmentedBar();
    }

    private initSegmentedBar() {
        let monthsChartsButton = new SegmentedBarItem();
        monthsChartsButton.title = "Month's Statistics";
        
        let typeChartsButton = new SegmentedBarItem();
        typeChartsButton.title = "Cost Type Statistics";

        this.barButtons = [monthsChartsButton, typeChartsButton];
       
        this.barButtonsSelectedIndex = 0;
    }

    private parseCostsForPie() {
        let costTypes = {};
        this.costService.costs.forEach(cost => {
            if(costTypes[cost.type] == undefined) {
                costTypes[cost.type] = 0;
            }
            costTypes[cost.type] += cost.quantity;
        });
        this.pieItems = new ObservableArray(this.objectToArray(costTypes));
    }

    private onSelectedIndexChange(args) {
        let segmetedBar = <SegmentedBar>args.object;
        this.barButtonsSelectedIndex = segmetedBar.selectedIndex;
        if(segmetedBar.selectedIndex === 1) {
            this.parseCostsForPie();
        }
    }

    private pullToRefresh(pullToRefreshArgs: any) {
        let pullRefresh = pullToRefreshArgs.object;
        this.costService.getCosts().then(result => {
            pullRefresh.refreshing = false;
        });
    }

    private objectToArray(object: any): Array<any> {
        let arr: any = [];
        for (const key in object) {
            let element = {
                type: key,
                quantity: object[key]
            };
            arr.push(element);
        }
        return arr;
    }
}
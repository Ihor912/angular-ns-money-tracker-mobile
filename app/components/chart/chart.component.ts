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
    private pieProvider: ObservableArray<any> = new ObservableArray();
    private cartesianProvider: ObservableArray<any> = new ObservableArray();

    constructor(private costService: CostService){
        this.initSegmentedBar();
    }

    public refreshCharts() {
        if(this.barButtonsSelectedIndex === 0) {
            this.parseCostsForCartesian();
        } else {
            this.parseCostsForPie();
        }
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
        this.pieProvider = new ObservableArray(this.objectToArray(costTypes));
    }

    private parseCostsForCartesian() {
        let costMonths = {};
        this.costService.costs.forEach(cost => {
            if(costMonths[cost.changesMonth] == undefined) {
                costMonths[cost.changesMonth] = 0;
            }
            costMonths[cost.changesMonth] += cost.quantity;
        });
        this.cartesianProvider = new ObservableArray(this.objectToArray(costMonths));
    }

    private onSelectedIndexChange(args) {
        let segmetedBar = <SegmentedBar>args.object;
        this.barButtonsSelectedIndex = segmetedBar.selectedIndex;
        if(segmetedBar.selectedIndex === 0) {
            this.parseCostsForCartesian();
        } else {
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
                changesMonth: key,
                quantity: object[key]
            };
            arr.push(element);
        }
        return arr;
    }
}
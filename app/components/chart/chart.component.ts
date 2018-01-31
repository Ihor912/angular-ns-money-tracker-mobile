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

    private onSelectedIndexChange(args) {
        let segmetedBar = <SegmentedBar>args.object;
        this.barButtonsSelectedIndex = segmetedBar.selectedIndex;
    }

    private pullToRefresh(pullToRefreshArgs: any) {
        let pullRefresh = pullToRefreshArgs.object;
        this.costService.getCosts().then(result => {
            pullRefresh.refreshing = false;
        });
    }
}
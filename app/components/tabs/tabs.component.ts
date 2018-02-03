import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { isAndroid } from 'platform';
import { SelectedIndexChangedEventData, TabView } from 'tns-core-modules/ui/tab-view';

import { ChartComponent } from '../../components/chart/chart.component';

@Component({
    selector: "tabs",
    moduleId: module.id,
    templateUrl: "./tabs.component.html",
    styleUrls: ["./tabs.component.css"]
})
export class TabsComponent {
    @Input() title: string;
    
    @ViewChild("tabView") tabView: ElementRef;
    @ViewChild("chart") chart: ChartComponent;

    private dateRange = {};

    constructor(private router: ActivatedRoute) {
        this.router.queryParams.subscribe(params => {
            if(params["startDate"] && params["endDate"]) {
                this.tabView.nativeElement.selectedIndex = 0;
                this.dateRange = {
                    startDate: params["startDate"],
                    endDate: params["endDate"]
                };
            }
        });
    }

    getIconSource(icon: string): string {
        return isAndroid ? "res://" + icon : "res://tabIcons/" + icon;
    }

    onSelectedIndexChanged(args: SelectedIndexChangedEventData) {
        const tabView = <TabView>args.object;
        const selectedTabViewItem = tabView.items[args.newIndex];
        if(args.newIndex === 2) {
            this.chart.refreshCharts();
        }

        this.title = selectedTabViewItem.title;

    }
}
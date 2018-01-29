import { Component, Input, ViewChild, ElementRef } from '@angular/core';
import { isAndroid } from 'platform';
import { SelectedIndexChangedEventData, TabView } from 'tns-core-modules/ui/tab-view';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: "tabs",
    moduleId: module.id,
    templateUrl: "./tabs.component.html",
    styleUrls: ["./tabs.component.css"]
})
export class TabsComponent {
    @Input() title: string;
    @ViewChild("tabView") tabView: ElementRef;
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

        this.title = selectedTabViewItem.title;
    }
}
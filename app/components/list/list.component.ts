import { Component, Input, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Utils } from '../../common/utils';

@Component({
    moduleId: module.id,
    selector: "list",
    templateUrl: "list.component.html",
    styleUrls: ["list.component.css"]
})
export class ListComponent {
    @Input() items;
    @Output() pullToRefreshEvent = new EventEmitter();
    @ViewChild("list") list: ElementRef;

    private pullRefresh = {};

    refresh() {
        this.list.nativeElement.refresh();
    }

    stopReloadTree() {
        this.pullRefresh['refreshing'] = false;
    }

    private getDateValue(item) {
        let currentDate: Date = new Date(Date.now());
        let itemDate: Date = new Date(item.changesDate);
        if(currentDate.toDateString() === itemDate.toDateString()) {
            return ("0" + itemDate.getHours()).slice(-2) + ":" + ("0" + itemDate.getMinutes()).slice(-2);
        }
        return Utils.dateToYMD(itemDate);
    }

    private refreshList(args: any) {
        this.pullRefresh = args.object;
        this.pullToRefreshEvent.emit();
    }
}
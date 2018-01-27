import { Component, Input } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: "list",
    templateUrl: "list.component.html",
    styleUrls: ["list.component.css"]
})
export class ListComponent {
    @Input() items;

    getDateValue(item) {
        let currentDate: Date = new Date(Date.now());
        let itemDate: Date = new Date(item.changesDate);
        if(currentDate.toDateString() === itemDate.toDateString()) {
            return ("0" + itemDate.getHours()).slice(-2) + ":" + ("0" + itemDate.getMinutes()).slice(-2);
        }
        return this.dateToYMD(itemDate);
    }

    dateToYMD(date) {
        let strArray=['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        let d = date.getDate();
        let m = strArray[date.getMonth()];
        let y = date.getFullYear();
        return '' + (d <= 9 ? '0' + d : d) + ' ' + m + ' ' + y;
    }
}
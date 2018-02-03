import { Component, Output } from '@angular/core';
import { DatePicker } from 'ui/date-picker';
import { RouterExtensions } from 'nativescript-angular';


@Component({
    selector: "date-range",
    moduleId: module.id,
    templateUrl: "./date-range.component.html",
    styleUrls: ["./date-range.component.css"]
})
export class DateRangeComponent {
    private _startDate: string;
    private _endDate: string;

    constructor(protected routerExtensions: RouterExtensions) {}

    onFilterTap() {
        this.routerExtensions.navigate(['/tabs'], { animated: false, queryParams: { startDate: this._startDate, endDate: this._endDate }});
    }

    onStartPickerLoaded(args) {
        let datePicker = <DatePicker>args.object;
        datePicker.date = new Date();
        this._startDate = datePicker.date.toDateString();
    }
    
    onEndPickerLoaded(args) {
        let datePicker = <DatePicker>args.object;
        datePicker.date = new Date();
        this._endDate = datePicker.date.toDateString();
    }

    onStartDateChange(args) {
        let startDateStr: string = args.value;
        this._startDate = startDateStr;
    }

    onEndDateChange(args) {
        let endDateStr: string = args.value;
        this._endDate = endDateStr;
    }
}
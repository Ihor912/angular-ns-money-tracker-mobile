import { Component, Output, EventEmitter } from "@angular/core";
import { DatePicker } from "ui/date-picker";
import { EventData } from "data/observable";

import { DateRange } from "../../../common/protocol";


@Component({
    selector: "calendar-date-range",
    moduleId: module.id,
    templateUrl: "./calendar-date-range.component.html",
    styleUrls: ["./calendar-date-range.component.css"]
})
export class CalendarDateRangeComponent {
    private _startDate:string;
    private _endDate:string;

    @Output() stateChanged = new EventEmitter();
    @Output() sendDateChange = new EventEmitter();
    
    onTap() {
        this.stateChanged.next("");

        let dateRange = {
            startDate: this._startDate,
            endDate: this._endDate
        }
        this.sendDateChange.next(dateRange);
    }

    onPickerLoaded(args) {
        let datePicker = <DatePicker>args.object;
        
        datePicker.minDate = new Date(2017, 0, 1);
        datePicker.maxDate = new Date(2017, 11, 12);
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
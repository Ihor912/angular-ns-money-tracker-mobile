import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: "chart",
    moduleId: module.id,
    templateUrl: "./chart.component.html",
    styleUrls: ["./chart.component.css"]
})
export class ChartComponent {
     
    @Output() stateChanged = new EventEmitter();
 
    onTap() {
        this.stateChanged.next("");
    }
}
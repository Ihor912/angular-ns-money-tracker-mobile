import { Component, Input } from "@angular/core";

@Component({
    moduleId: module.id,
    selector: "list",
    templateUrl: "list.component.html",
    styleUrls: ["list.component.css"]
})
export class ListComponent {
    @Input() items;
}
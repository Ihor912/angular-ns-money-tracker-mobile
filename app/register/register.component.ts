import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import * as ApplicationSettings from "application-settings";

@Component({
    moduleId: module.id,
    selector: "ns-register",
    templateUrl: "register.component.html",
    styleUrls: ["register.component.css"]
})
export class RegisterComponent implements OnInit {

    public input: any;
    
    public constructor(private router: RouterExtensions) {
        this.input = {
            "name": "",
            "surname": "",
            "login": "",
            "email": "",
            "password": "",
        }
    }

       public ngOnInit() {}
}
import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import * as ApplicationSettings from "application-settings";
 
@Component({
    moduleId: module.id,
    selector: "ns-login",
    templateUrl: "login.component.html",
    styleUrls: ["login.component.css"]
})
export class LoginComponent implements OnInit {
 
    public input: any;
 
    public constructor(private router: RouterExtensions) {
        this.input = {
            "email": "",
            "password": ""
        }
    }
 
    public ngOnInit() {}
 
    public login() {
         this.router.navigate(["/tabs"], { clearHistory: true });
    }
}
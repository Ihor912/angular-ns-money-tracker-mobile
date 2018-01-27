import { Component } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';
import firebase = require('nativescript-plugin-firebase');
import { User } from 'nativescript-plugin-firebase';

import { Config } from '../../common/config';

 
@Component({
    moduleId: module.id,
    selector: "login",
    templateUrl: "login.component.html",
    styleUrls: ["login.component.css"]
})
export class LoginComponent {
    private form: any = {};
    private isLoading: boolean = false;

    public constructor(private router: RouterExtensions) {
    }

    private login() {
        this.isLoading = true;
        firebase.login({
            type: firebase.LoginType.PASSWORD, 
            email: this.form.email,  // 'ihor.khomiak1@test.com', 
            password: this.form.password  // '123456'
        })
        .then((user) => {
            this.isLoading = false;
            Config.saveAllUserInfo(user);
            this.router.navigate(["/tabs"], { clearHistory: true });
        }, (error) => {
            this.isLoading = false;
            alert("Error: " + error);
        });
    }
}
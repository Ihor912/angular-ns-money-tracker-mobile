import { Component } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';
import firebase = require('nativescript-plugin-firebase');

import { User } from '../common/protocol';

 
@Component({
    moduleId: module.id,
    selector: "login",
    templateUrl: "login.component.html",
    styleUrls: ["login.component.css"]
})
export class LoginComponent {
    private user: User;
    private form: any = {};
    private isLoading: boolean = false;

    public constructor(private router: RouterExtensions) {
    }

    ngOnInit() {
        this.autoLogin();
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
            this.user = user as User;
            alert("Logged in as " + user['email']);
            this.router.navigate(["/tabs"], { clearHistory: true });
        }, (error) => {
            this.isLoading = false;
            alert("Error: " + error);
        });
    }

    private autoLogin() {
        // to immediately re-login the user when he re-visits app
        const that = this;
        firebase.init({
            onAuthStateChanged: function(data) {
                if (data.loggedIn) {
                    that.router.navigate(["/tabs"], { clearHistory: true })
                }
            }
        });
    }
}
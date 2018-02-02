import { Component } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';
import firebase = require('nativescript-plugin-firebase');
import { Page } from 'ui/page';

import { Config } from '../../../common/config';

@Component({
    moduleId: module.id,
    selector: "register",
    templateUrl: "register.component.html",
    styleUrls: ["register.component.css"]
})
export class RegisterComponent {
    private form: any = {};
    private isLoading: boolean = false;

    public constructor(private router: RouterExtensions, private page: Page) {
        page.actionBarHidden = true;
    }

    public onRegister() {
        this.isLoading = true;
        firebase.createUser({
            email: this.form.email,
            password: this.form.password
        })
        .then(
            user => {
                this.isLoading = false;
                alert("Створено нового користовача!");
            }, 
            error => {
                this.isLoading = false;
                alert("Error: " + error);
            }
        );
    }
}
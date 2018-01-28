import { Component } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';
import firebase = require('nativescript-plugin-firebase');
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

    public constructor(private router: RouterExtensions) {
    }

    public onRegister() {
        this.isLoading = true;
        firebase.createUser({
            email: this.form.email,  // 'ihor.khomiak1@test.com', 
            password: this.form.password  // '123456'
        })
        .then(
            user => {
                this.isLoading = false;
                alert("Created new user!");
            }, 
            error => {
                this.isLoading = false;
                alert("Error: " + error);
            }
        );
    }
}
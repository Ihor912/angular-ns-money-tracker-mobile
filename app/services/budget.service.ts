import { Injectable } from '@angular/core';
import firebase = require('nativescript-plugin-firebase');

import { Config } from '../common/config';

@Injectable()
export class BudgetService {
    public budget: number = 0;
    
    getBudget() {
        const userid = Config.getUserToken();
        firebase.getValue(`/${userid}/budget`).then(result => {
            this.budget = result.value.value;
        });
    }
    
    setBudget(value: number) {
        const userid = Config.getUserToken();
        firebase.setValue(
            `/${userid}/budget`,
            {
              value: value,
              updateTs: firebase.ServerValue.TIMESTAMP
            }
        ).then(result => {
            this.budget = value;
        });
    }
}
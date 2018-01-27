import { platformNativeScriptDynamic } from 'nativescript-angular/platform';
import firebase = require('nativescript-plugin-firebase');

import { AppModule } from './app.module';
import { Config } from './common/config';

firebase.init({
    onAuthStateChanged: (data: any) => {
        if (data.loggedIn) {
            Config.saveAllUserInfo(data.user);
        } else {
            Config.saveUserToken('');
        }
    }
})
.then(
    (instance) => console.log("firebase.init done"),
    (error) => console.log("firebase.init error: " + error)
);

platformNativeScriptDynamic().bootstrapModule(AppModule);

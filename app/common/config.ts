import * as appSettings from 'application-settings';
import { User } from 'nativescript-plugin-firebase';

export class Config {

    public static saveEmail(value) {
        this.Save("email", value);
    }
    
    public static saveUserName(value) {
        this.Save("username", value);
    }
    
    public static saveUserToken(value) {
        this.Save("token", value);
    }

    public static getEmail() {
        return this.GetString("email");
    }

    public static getUserName() {
        return this.GetString("username");
    }

    public static getUserToken() {
        return this.GetString("token");
    }

    public static saveAllUserInfo(user: User) {
        Config.saveEmail(user.email);
        Config.saveUserName(user.name);
        Config.saveUserToken(user.uid);
    }

    public static removeAllUserInfo() {
        Config.saveEmail('');
        Config.saveUserName('');
        Config.saveUserToken('');
    }

    public static isLoggedIn(): boolean {
        return !!appSettings.getString("token");
    }

    private static Save(type: string, data: any){
        if(typeof data === "string"){
            appSettings.setString(type, <string>data);
        }
        else if(typeof data === "number"){
            appSettings.setNumber(type, <number>data);
        }
        else if(typeof data === "boolean"){
            appSettings.setBoolean(type, <boolean>data);
        }
    }

    private static GetString(key: string){
        return appSettings.getString(key.toString());
    }
}
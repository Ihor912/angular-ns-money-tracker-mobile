import * as appSettings from 'application-settings';

export class Config {

    public static saveEmail(value) {
        this.Save("email", value);
    }
    
    public static saveUserName(value) {
        this.Save("username", value);
    }
    
    public static saveUserUid(value) {
        this.Save("userUid", value);
    }

    public static getEmail() {
        return this.GetString("email");
    }

    public static getUserName() {
        return this.GetString("username");
    }

    public static getUserUid() {
        return this.GetString("userUid");
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
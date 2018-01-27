export interface DateRange {
    startDate: string;
    endDate: string;
}

export interface User {
    uid: string;
    name: string;
    email: string;
    emailVerified: boolean;
    providers: any[];
    anonymous: boolean;
    phoneNumber: string;
    profileImageURL: string;
}
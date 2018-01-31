export class Utils {

    public static dateToYMD(date) {
        let strArray=['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        let d = date.getDate();
        let m = strArray[date.getMonth()];
        let y = date.getFullYear();
        return '' + (d <= 9 ? '0' + d : d) + ' ' + m + ' ' + y;
    }

    public static formatDateString(dateString: string): string {
        return (new Date(dateString)).toDateString().slice(4);
    }

    public static increaseDateByOneDay(dateString: string): string {
        let date = new Date(dateString);
        date.setDate(date.getDate() + 1);
        return date.toISOString();
    }

    public static getMonthName(date: Date) {
        const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        return monthNames[date.getMonth()];
    }

    public static getMonthAndYear(date: Date) {
        const monthName = Utils.getMonthName(date);
        const year = (date).getFullYear().toString().substring(2);
        return monthName + ' ' + year;
    }
}
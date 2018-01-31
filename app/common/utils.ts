export class Utils {

    public static dateToYMDWithMonthName(date) {
        const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        const d = date.getDate();
        const m = monthNames[date.getMonth()];
        const y = date.getFullYear();
        return y + ' ' + m + ' ' + (d <= 9 ? '0' + d : d);
    }

    public static dateToYMD(date) {
        const d = date.getDate();
        const y = date.getFullYear();
        const m = (date.getMonth()+1);
        return y + '-' + (m <= 9 ? '0' + m : m) + '-' + (d <= 9 ? '0' + d : d);
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
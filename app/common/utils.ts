export class Utils {

    public static dateToDMY(date) {
        let strArray = ['Січ', 'Лют', 'Бер', 'Кві', 'Тра', 'Чер', 'Лип', 'Сеп', 'Вер', 'Жов', 'Лис', 'Гру'];
        let d = date.getDate();
        let m = strArray[date.getMonth()];
        let y = date.getFullYear();
        return (d <= 9 ? '0' + d : d) + ' ' + m + ' ' + y;
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
        const monthNames = ['Січ', 'Лют', 'Бер', 'Кві', 'Тра', 'Чер', 'Лип', 'Сеп', 'Вер', 'Жов', 'Лис', 'Гру'];
        return monthNames[date.getMonth()];
    }

    public static getMonthAndYear(date: Date) {
        const monthName = Utils.getMonthName(date);
        const year = (date).getFullYear().toString().substring(2);
        return monthName + ' ' + year;
    }
}
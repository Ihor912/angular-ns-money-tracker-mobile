export interface DateRange {
    startDate: string;
    endDate: string;
}

export class Cost {
    id: string;
    quantity: number;
    type: string;
    changesDate: string;
    isFavorite: boolean;
    changesMonth: string;
}
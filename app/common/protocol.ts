export interface DateRange {
    startDate: string;
    endDate: string;
}

export class Cost {
    id: number;
    quantity: number;
    type: string;
    changesDate: string;
    isFavorite:boolean;
}
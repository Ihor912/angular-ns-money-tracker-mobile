export interface DateRange {
    startDate: string;
    endDate: string;
}

export class Cost {
    id: string;
    quantity: string;
    type: string;
    changesDate: string;
    isFavorite: boolean;
}
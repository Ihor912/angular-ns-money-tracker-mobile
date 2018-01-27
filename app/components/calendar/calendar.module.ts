import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptFormsModule } from 'nativescript-angular/forms';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';

import { AppRoutingModule } from '../../app.routing';
import { CostService } from '../cost/cost.service';

//import { CalendarDateRangeComponent } from "./date-range/calendar-date-range.component";

@NgModule({
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        NativeScriptFormsModule
    ],
    declarations: [
        //CalendarDateRangeComponent
    ],
    providers: [
        CostService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})

export class CalendarModule { }
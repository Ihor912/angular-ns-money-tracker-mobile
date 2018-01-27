import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
import { NativeScriptFormsModule } from "nativescript-angular/forms"

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { BudgetComponent } from './budget/budget.component';
import { BudgetModule } from './budget/budget.module';
import { ListComponent } from './list/list.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CalendarComponent } from './tabs/calendar/calendar.component';
import { CalendarModule } from './tabs/calendar/calendar.module';
import { CalendarDateRangeCostListComponent } from './tabs/calendar/date-range-cost-list/calendar-date-range-cost-list.component';
import { CalendarDateRangeComponent } from './tabs/calendar/date-range/calendar-date-range.component';
import { ChartComponent } from './tabs/charts/chart.component';
import { CostModule } from './tabs/cost/cost.module';
import { CostsComponent } from './tabs/cost/costs.component';
import { TabsComponent } from './tabs/tabs.component';

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        NativeScriptFormsModule,
        CostModule,
        CalendarModule,
        BudgetModule
    ],
    declarations: [
        AppComponent,
        TabsComponent,
        CostsComponent,
        LoginComponent,
        RegisterComponent,
        CalendarComponent,
        CalendarDateRangeComponent,
        CalendarDateRangeCostListComponent,
        ListComponent,
        ChartComponent,
        BudgetComponent
    ],
    providers: [
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})

export class AppModule { }

import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptFormsModule } from 'nativescript-angular/forms';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { BudgetComponent } from './components/budget/budget.component';
import { BudgetModule } from './components/budget/budget.module';
import { CalendarComponent } from './components/calendar/calendar.component';
import { CalendarModule } from './components/calendar/calendar.module';
import { CalendarDateRangeCostListComponent } from './components/calendar/date-range-cost-list/calendar-date-range-cost-list.component';
import { CalendarDateRangeComponent } from './components/calendar/date-range/calendar-date-range.component';
import { ChartComponent } from './components/chart/chart.component';
import { CostModule } from './components/cost/cost.module';
import { CostsComponent } from './components/cost/costs.component';
import { ListComponent } from './components/list/list.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/login/register/register.component';
import { TabsComponent } from './components/tabs/tabs.component';

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

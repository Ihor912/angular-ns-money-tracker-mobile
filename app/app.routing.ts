import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from 'nativescript-angular/router';

import { BudgetComponent } from './components/budget/budget.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { CalendarDateRangeCostListComponent } from './components/calendar/date-range-cost-list/calendar-date-range-cost-list.component';
import { CalendarDateRangeComponent } from './components/calendar/date-range/calendar-date-range.component';
import { ChartComponent } from './components/chart/chart.component';
import { CostDetailComponent } from './components/cost/detail/cost-detail.component';
import { CostEditComponent } from './components/cost/edit/cost-edit.component';
import { ListComponent } from './components/list/list.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/login/register/register.component';
import { TabsComponent } from './components/tabs/tabs.component';

const routes: Routes = [
    { path: "", component: LoginComponent },
    { path: 'tabs', component: TabsComponent },
    { path: 'register', component: RegisterComponent },
    //{ path: "costs", component: CostsComponent },
    { path: "cost/:id", component: CostDetailComponent },
    { path: "cost-edit/:id", component: CostEditComponent },
    { path: "calendar", component: CalendarComponent },
    { path: "date-range", component: CalendarDateRangeComponent },
    { path: "date-range-cost-list", component: CalendarDateRangeCostListComponent },
    { path: "list", component: ListComponent },
    { path: "chart", component: ChartComponent },
    { path: "budget", component: BudgetComponent }
];

@NgModule({
    imports: [ NativeScriptRouterModule.forRoot(routes) ],
    exports: [ NativeScriptRouterModule ]
})
export class AppRoutingModule { }
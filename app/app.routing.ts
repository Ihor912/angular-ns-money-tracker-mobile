import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { TabsComponent } from "./tabs/tabs.component";
import { CostsComponent } from "./tabs/cost/costs.component";
import { CostDetailComponent } from "./tabs/cost/detail/cost-detail.component";
import { CostEditComponent } from "./tabs/cost/edit/cost-edit.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { CalendarComponent } from "./tabs/calendar/calendar.component";
import { CalendarDateRangeComponent } from "./tabs/calendar/date-range/calendar-date-range.component";
import { CalendarDateRangeCostListComponent } from "./tabs/calendar/date-range-cost-list/calendar-date-range-cost-list.component";
import { ListComponent } from "./list/list.component";
import { ChartComponent } from "./tabs/charts/chart.component";
import { BudgetComponent } from "./budget/budget.component"; 

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
    { path: "charts", component: ChartComponent },
    { path: "budget", component: BudgetComponent }
];

@NgModule({
    imports: [ NativeScriptRouterModule.forRoot(routes) ],
    exports: [ NativeScriptRouterModule ]
})
export class AppRoutingModule { }
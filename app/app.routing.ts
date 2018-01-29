import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from 'nativescript-angular/router';

import { AuthGuard } from './auth-guard.service';
import { BudgetComponent } from './components/budget/budget.component';
import { DateRangeComponent } from './components/date-range/date-range.component';
import { ChartComponent } from './components/chart/chart.component';
import { CostDetailComponent } from './components/cost/detail/cost-detail.component';
import { CostEditComponent } from './components/cost/edit/cost-edit.component';
import { ListComponent } from './components/list/list.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/login/register/register.component';
import { TabsComponent } from './components/tabs/tabs.component';

const routes: Routes = [
    { path: "", redirectTo: "/tabs", pathMatch: "full" },
    { path: 'tabs', component: TabsComponent, canActivate: [AuthGuard] },
    { path: "login", component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: "cost/:id", component: CostDetailComponent },
    { path: "cost-edit/:id", component: CostEditComponent },
    { path: "date-range", component: DateRangeComponent },
    { path: "list", component: ListComponent },
    { path: "chart", component: ChartComponent },
    { path: "budget", component: BudgetComponent }
];

export const authProviders = [
    AuthGuard
];

@NgModule({
    imports: [ NativeScriptRouterModule.forRoot(routes) ],
    exports: [ NativeScriptRouterModule ]
})
export class AppRoutingModule { }
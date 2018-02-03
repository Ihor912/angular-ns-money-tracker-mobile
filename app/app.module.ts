import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptFormsModule } from 'nativescript-angular/forms';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
import { registerElement } from 'nativescript-angular';
import { NativeScriptUIChartModule } from 'nativescript-pro-ui/chart/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule, authProviders } from './app.routing';
import { Config } from './common/config';
import { BudgetComponent } from './components/budget/budget.component';
import { DateRangeComponent } from './components/date-range/date-range.component';
import { ChartComponent } from './components/chart/chart.component';
import { CostsComponent } from './components/cost/costs.component';
import { ListComponent } from './components/list/list.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/login/register/register.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { BudgetService } from './services/budget.service';
import { CostDetailComponent } from './components/cost/detail/cost-detail.component';
import { CostEditComponent } from './components/cost/edit/cost-edit.component';
import { CostService } from './services/cost.service';

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        NativeScriptFormsModule,
        NativeScriptUIChartModule
    ],
    declarations: [
        AppComponent,
        TabsComponent,
        CostsComponent,
        CostDetailComponent,
        CostEditComponent,
        LoginComponent,
        RegisterComponent,
        DateRangeComponent,
        ListComponent,
        ChartComponent,
        BudgetComponent
    ],
    providers: [
        authProviders,
        Config,
        CostService,
        BudgetService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})

export class AppModule { }

registerElement("pullToRefresh", () => require("nativescript-pulltorefresh").PullToRefresh);
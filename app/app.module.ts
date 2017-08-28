import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { AppRoutingModule } from "./app.routing";
import { AppComponent } from "./app.component";
import { CostModule } from "./tabs/cost/cost.module";
import { CalendarModule } from "./tabs/calendar/calendar.module"


import { TabsComponent } from "./tabs/tabs.component";
import { CostsComponent } from "./tabs/cost/costs.component";
import { LoginComponent} from "./login/login.component";
import { RegisterComponent} from "./register/register.component";
import { CalendarComponent} from "./tabs/calendar/calendar.component";

import { CalendarDateRangeComponent } from "./tabs/calendar/date-range/calendar-date-range.component";
import { CalendarDateRangeCostListComponent } from "./tabs/calendar/date-range-cost-list/calendar-date-range-cost-list.component";
import { ListComponent } from "./list/list.component";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        CostModule,
        CalendarModule
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
        ListComponent
    ],
    providers: [
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})

export class AppModule { }

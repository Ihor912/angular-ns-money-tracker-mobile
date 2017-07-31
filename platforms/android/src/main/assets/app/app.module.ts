import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { AppRoutingModule } from "./app.routing";
import { AppComponent } from "./app.component";

import { CostService } from "./cost/cost.service";
import { CostsComponent } from "./cost/costs.component";
import { CostDetailComponent } from "./cost/cost-detail.component";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        CostsComponent,
        CostDetailComponent
    ],
    providers: [
        CostService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})

export class AppModule { }

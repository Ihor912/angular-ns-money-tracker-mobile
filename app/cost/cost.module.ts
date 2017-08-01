import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { AppRoutingModule } from "../app.routing";
import { NativeScriptFormsModule } from "nativescript-angular/forms"

import { CostService } from "./cost.service";
import { CostsComponent } from "./costs.component";
import { CostDetailComponent } from "./cost-detail.component";

@NgModule({
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        NativeScriptFormsModule
    ],
    declarations: [
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

export class CostModule { }
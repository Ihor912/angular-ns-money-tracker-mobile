import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { CostsComponent } from "./cost/costs.component";
import { CostDetailComponent } from "./cost/cost-detail.component";

const routes: Routes = [
    { path: "", redirectTo: "/costs", pathMatch: "full" },
    { path: "costs", component: CostsComponent },
    { path: "cost/:id", component: CostDetailComponent },
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
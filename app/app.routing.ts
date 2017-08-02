import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { CostsComponent } from "./cost/costs.component";
import { CostDetailComponent } from "./cost/detail/cost-detail.component";
import { CostEditComponent } from "./cost/edit/cost-edit.component";

const routes: Routes = [
    { path: "", redirectTo: "/costs", pathMatch: "full" },
    { path: "costs", component: CostsComponent },
    { path: "cost/:id", component: CostDetailComponent },
    { path: "cost-edit/:id", component: CostEditComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
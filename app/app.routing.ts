import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { TabsComponent } from "./tabs/tabs.component";
import { CostsComponent } from "./tabs/cost/costs.component";
import { CostDetailComponent } from "./tabs/cost/detail/cost-detail.component";
import { CostEditComponent } from "./tabs/cost/edit/cost-edit.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";

const routes: Routes = [
    { path: "", component: LoginComponent },
    { path: 'tabs', component: TabsComponent },
    { path: 'register', component: RegisterComponent },
    //{ path: "costs", component: CostsComponent },
    { path: "cost/:id", component: CostDetailComponent },
    { path: "cost-edit/:id", component: CostEditComponent }
];

@NgModule({
    imports: [ NativeScriptRouterModule.forRoot(routes) ],
    exports: [ NativeScriptRouterModule ]
})
export class AppRoutingModule { }
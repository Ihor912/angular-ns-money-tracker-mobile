import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptFormsModule } from 'nativescript-angular/forms';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';

import { AppRoutingModule } from '../../app.routing';
import { CostService } from '../../services/cost.service';
import { CostDetailComponent } from './detail/cost-detail.component';
import { CostEditComponent } from './edit/cost-edit.component';

@NgModule({
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        NativeScriptFormsModule
    ],
    declarations: [
        CostDetailComponent,
        CostEditComponent
    ],
    providers: [
        CostService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})

export class CostModule { }
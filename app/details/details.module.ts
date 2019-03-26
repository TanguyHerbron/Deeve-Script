import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptFormsModule } from "nativescript-angular/forms";

import { DetailsRoutingModule } from "./details-routing.module";
import { DetailsComponent } from "./details.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        NativeScriptFormsModule,
        DetailsRoutingModule
    ],
    declarations: [
        DetailsComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class DetailsModule { }

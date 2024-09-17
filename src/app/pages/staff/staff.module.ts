import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { StaffRoutingModule } from './staff-routing.module'
import { StaffComponent } from './staff/staff.component'
import { SharedModule } from 'src/app/shared/shared.module'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import {TranslateModule} from "@ngx-translate/core";
import { CompteBancaireComponent } from './compte-bancaire/compte-bancaire.component';
import { DetailsComponent } from './details/details.component';
import {NgbDropdownModule, NgbModule, NgbNavModule, NgbTooltipModule} from "@ng-bootstrap/ng-bootstrap";
import { ContratComponent } from './contrat/contrat.component';
import {FlatpickrModule} from "angularx-flatpickr";
import { PostePersonnelComponent } from './poste-personnel/poste-personnel.component';


@NgModule({
    declarations: [
        StaffComponent,
        CompteBancaireComponent,
        DetailsComponent,
        ContratComponent,
        PostePersonnelComponent,
    ],
    imports: [
        CommonModule,
        StaffRoutingModule,
        SharedModule,
        FormsModule,
        ReactiveFormsModule,
        TranslateModule,
        NgbNavModule,
        FlatpickrModule.forRoot(),
        NgbModule

    ],
    exports: []
})
export class StaffModule {}

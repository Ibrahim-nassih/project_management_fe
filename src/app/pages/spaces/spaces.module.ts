import { NgModule, CUSTOM_ELEMENTS_SCHEMA ,} from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpacesRoutingModule } from './spaces-routing.module';
import { ListSpacesComponent } from './list-spaces/list-spaces.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ListLeadsComponent } from './leads/list-leads/list-leads.component';
import { KANBANBOARDComponent } from './tasks/kanban-board/kanban-board.component';
import { SimplebarAngularModule } from 'simplebar-angular';
import { NgbDropdownModule, NgbNavModule, NgbPaginationModule, NgbProgressbarModule, NgbTooltipModule, NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DndModule } from 'ngx-drag-drop';
import { FlatpickrModule } from 'angularx-flatpickr';
import { CountToModule } from 'angular-count-to';
import { NgSelectModule } from '@ng-select/ng-select';
import { CreateLeadComponent } from './leads/create-lead/create-lead.component';
import { ArchwizardModule } from 'angular-archwizard';
import { TaskComponent } from './tasks/task/task.component';
import { NavBoardComponent } from './tasks/kanban-board/nav-board/nav-board.component';
import { StepFormComponent } from './tasks/kanban-board/nav-board/step-form/step-form.component';
import { TransactionFormComponent } from './tasks/kanban-board/nav-board/transaction-form/transaction-form.component';
import { SprintFormComponent } from './tasks/kanban-board/nav-board/sprint-form/sprint-form.component';
import { AddMembersComponent } from './leads/list-leads/add-members/add-members.component';
import { TicketFormComponent } from './tasks/kanban-board/nav-board/ticket-form/ticket-form.component';
// Ck Editer


@NgModule({
  declarations: [
    ListSpacesComponent,
    ListLeadsComponent,
    KANBANBOARDComponent,
    CreateLeadComponent,
    TaskComponent,
    NavBoardComponent,
    StepFormComponent,
    TransactionFormComponent,
    SprintFormComponent,
    AddMembersComponent,
    TicketFormComponent
  ],
  imports: [  
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule,
    NgbDropdownModule,
    NgbNavModule,
    NgbTooltipModule,
    NgbProgressbarModule,
    NgbTypeaheadModule,
    NgbPaginationModule,
    SimplebarAngularModule,
    DndModule,
    FlatpickrModule.forRoot(),
    CountToModule,
    CommonModule,
    SpacesRoutingModule,
    SharedModule,
    ArchwizardModule,
  ], 
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SpacesModule { 

}

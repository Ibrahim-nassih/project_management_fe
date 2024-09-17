import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListSpacesComponent } from './list-spaces/list-spaces.component';
import { ListLeadsComponent } from './leads/list-leads/list-leads.component';
import { AuthGuard } from 'src/app/core/guards/auth.guard';
import { KANBANBOARDComponent } from './tasks/kanban-board/kanban-board.component';
import { CreateLeadComponent } from './leads/create-lead/create-lead.component';

const routes: Routes = [
{ path: '', component: ListSpacesComponent },
{path:'leads',component:ListLeadsComponent
},
{path:'tasks',component:KANBANBOARDComponent
} ,
{path:'addLead',component:CreateLeadComponent
} ,
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpacesRoutingModule { }

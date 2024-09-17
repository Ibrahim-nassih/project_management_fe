import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { StaffComponent } from './staff/staff.component'
import { LayoutsModule } from 'src/app/layouts/layouts.module'
import { AuthGuard } from '../../core/guards/auth.guard'

const routes: Routes = [
  {
    path: '',
    component: StaffComponent,
    canActivate: [AuthGuard],
    data: { title: 'Personnel', role: 'ETABLISSEMENT_MENU_PERSONNEL' },
  },
]

@NgModule({
  declarations: [],
  imports: [LayoutsModule, RouterModule.forChild(routes)],
})
export class StaffRoutingModule {}

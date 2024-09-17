import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Component Pages
import { LoginComponent } from "./login/login.component";
import {LockScreenComponent} from "./lockscreen/lockscreen.component";
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: "login",
    component: LoginComponent,
    data: { title: 'Login' },
  },
  {
    path: 'lockscreen',
    component: LockScreenComponent,
    data: { title: 'Lockscreen' },
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: { title: 'Register' },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }

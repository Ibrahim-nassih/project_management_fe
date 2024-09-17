import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layouts/layout.component';
import {Error403PageComponent} from "./pages/Error/403/403.component";
import {Error404PageComponent} from "./pages/Error/404/404.component";
import {AppPreloader} from "./app-routing-loader";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'authentication/login',
    pathMatch: 'full',
  },
  { path: 'authentication',
    children: [
      {
        path: '',
        loadChildren: () => import('./account/account.module').then(m => m.AccountModule)
      },
    ],
  },
  {
    path: 'personnel',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
            import('src/app/pages/staff/staff.module').then(
                m => m.StaffModule,
            ),
      },
    ],
  },
  {
    path: 'not-authorized',
    component: Error403PageComponent,
  },
  { path: 'spaces', 
  component: LayoutComponent,
  children: [
    {
      path: '',loadChildren: () => import('./pages/spaces/spaces.module').then(m => m.SpacesModule) }]},
  {
    path: '**',
    component: Error404PageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true,preloadingStrategy: AppPreloader, })],
  providers: [AppPreloader],
  exports: [RouterModule]
})
export class AppRoutingModule { }

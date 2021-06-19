import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: './pages/login/login.module#LoginModule'
  },
  {
    path: 'sign-up',
    loadChildren: './pages/accout/accout.module#AccoutModule'
  },
  {
    path: 'main',
    loadChildren: './pages/layout/layout.module#LayoutModule'
  },
  {
    path: 'account',
    loadChildren: './pages/accout/accout.module#AccoutModule'
  },
  {
    path: '**',
    redirectTo: 'login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

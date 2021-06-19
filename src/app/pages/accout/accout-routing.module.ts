import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccoutComponent } from './accout.component';

const routes: Routes = [
  {
    path: '',
    component: AccoutComponent
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccoutRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { ChooseComponent } from './choose/choose.component';
import { ClassComponent } from './class/class.component';
import { InfoComponent } from './info/info.component';
import { LayoutComponent } from './layout.component';
import { QueryClassComponent } from './query-class/query-class.component';
import { QueryComponent } from './query/query.component';
import { UploadComponent } from './upload/upload.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [{
      path: '',
      redirectTo: 'info',
      pathMatch: 'full',
    }, {
      path: 'info',
      component: InfoComponent
    }, {
      path: 'choose',
      component: ChooseComponent
    }, {
      path: 'class',
      component: ClassComponent
    }, {
      path: 'account',
      component: AccountComponent
    }, {
      path: 'query',
      component: QueryComponent
    }, {
      path: 'query-class',
      component: QueryClassComponent
    }, {
      path: 'upload',
      component: UploadComponent
    }]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }

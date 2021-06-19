import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { LayoutRoutingModule } from './layout-routing.module';
import { InfoComponent } from './info/info.component';
import { QueryComponent } from './query/query.component';
import { ChooseComponent } from './choose/choose.component';
import { QueryClassComponent } from './query-class/query-class.component';
import { UploadComponent } from './upload/upload.component';
import { ClassComponent } from './class/class.component';
import { AccountComponent } from './account/account.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [LayoutComponent, InfoComponent, QueryComponent, ChooseComponent, QueryClassComponent, UploadComponent, ClassComponent, AccountComponent],
  imports: [
    CommonModule,
    NgZorroAntdModule,
    LayoutRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class LayoutModule { }

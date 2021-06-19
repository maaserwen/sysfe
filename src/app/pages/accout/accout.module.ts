import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccoutRoutingModule } from './accout-routing.module';
import { AccoutComponent } from './accout.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AccoutComponent],
  imports: [
    CommonModule,
    AccoutRoutingModule,
    NgZorroAntdModule,
    ReactiveFormsModule
  ]
})
export class AccoutModule { }

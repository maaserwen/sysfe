import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailRoutingModule } from './detail-routing.module';
import { DetailComponent } from './detail.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  declarations: [DetailComponent],
  imports: [
    CommonModule,
    DetailRoutingModule,
    NgZorroAntdModule,
    ComponentsModule
  ]
})
export class DetailModule { }

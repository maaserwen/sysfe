import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogListComponent } from './blog-list/blog-list.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { RouterModule } from '@angular/router';
import { DynamicAnchorComponent } from './dynamic-anchor/dynamic-anchor.component';

@NgModule({
  declarations: [
    BlogListComponent,
    DynamicAnchorComponent
  ],
  exports: [
    BlogListComponent,
    DynamicAnchorComponent
  ],
  imports: [
    CommonModule,
    NgZorroAntdModule,
    RouterModule
  ]
})
export class ComponentsModule { }

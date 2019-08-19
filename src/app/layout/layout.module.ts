import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    SidebarComponent,
    NavbarComponent,
    FooterComponent
  ],
  exports: [
    SidebarComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    NgZorroAntdModule,
    RouterModule,
    ReactiveFormsModule
  ]
})
export class LayoutModule { }

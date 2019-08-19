import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { HomeRoutingModule } from './home-routing.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }

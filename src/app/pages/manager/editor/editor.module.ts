import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditorRoutingModule } from './editor-routing.module';
import { EditorComponent } from './editor.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { QuillModule } from 'ngx-quill';
import { EqualValidator } from 'src/app/directives/validate-equal.directive';

@NgModule({
  declarations: [
    EditorComponent,
    EqualValidator
  ],
  imports: [
    CommonModule,
    EditorRoutingModule,
    ReactiveFormsModule,
    NgZorroAntdModule,
    FormsModule,
    QuillModule.forRoot()
  ]
})
export class EditorModule { }

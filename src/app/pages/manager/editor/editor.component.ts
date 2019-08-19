import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UploadXHRArgs, UploadFile } from 'ng-zorro-antd';
import { RequestService } from 'src/app/service/request.service';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {
  @ViewChild('fileUploader', {static: false})
  fileUploader: ElementRef;

  src = '';
  title = '测试标题';
  des = '测试描述';
  previewImage = '';
  validateForm: FormGroup = new FormGroup({
    title: new FormControl('', Validators.required),
    des: new FormControl('', Validators.required),
    classification: new FormControl('', Validators.required)
  });
  classificationOptions = [{
    value: 'fe',
    label: '前端',
    children: [{
      value: 'frameWork',
      label: '框架',
      children: [{
        value: 'Angular',
        label: 'Angular',
        isLeaf: true
      }, {
        value: 'React',
        label: 'React',
        isLeaf: true
      }, {
        value: 'Vue',
        label: 'Vue',
        isLeaf: true
      }]
    }, {
      value: 'native',
      label: '原生',
      children: [{
        value: 'es6',
        label: 'ES6',
        isLeaf: true
      }]
    }]
  }, {
    value: 'be',
    label: '后台',
    children: [{
      value: 'nodejs',
      label: 'Nodejs',
      children: [{
        value: 'express',
        label: 'Express',
        isLeaf: true
      }]
    }]
  }];
  fileList: Array<UploadFile> = [];
  uploadOptions: UploadXHRArgs;
  public editorContent = `<h3>I am Example content</h3>`;
  public editorOptions = {
    placeholder: 'insert content...'
  };

  constructor(
    private req: RequestService,
    // private blogAPIService: BlogAPIService
  ) {}

  submit() {
    // const editorRequest: EditorRequest = {
    //   title: this.title,
    //   content: this.editorContent,
    //   des: this.des
    // };
    // this.editorService.saveBlog(editorRequest).subscribe(res => {
    //   console.log(res);
    // });
  }

  uploadFile() {
    const uploader = this.fileUploader.nativeElement as HTMLElement;
    uploader.click();
  }

  handlePreview() {

  }

  upload(e) {
    const file = e.target.files[0];
    if (file) {
      this.req.uploadFile(file).subscribe((res) => {
        // if (res.status === 'SUCCESS') {
        //   this.previewImage = res.data;
        // }
      });
    }
  }

  customUpload = (item) => {
    console.log(item);
  }

  classificationChanges(ev) {
    console.log(ev);
  }

  ngOnInit() {

  }
}

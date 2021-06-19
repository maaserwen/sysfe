import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd';
import { RequestService } from 'src/app/service/request.service';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.scss']
})
export class ClassComponent implements OnInit {
  isVisible = false;
  isDeleteVisible = false;
  listOfData = [
    {
      key: '1',
      name: 'John Brown',
      address: 'New York No. 1 Lake Park'
    },
    {
      key: '2',
      name: 'Jim Green',
      address: 'London No. 1 Lake Park'
    },
    {
      key: '3',
      name: 'Joe Black',
      address: 'Sidney No. 1 Lake Park'
    },
    {
      key: '3',
      name: 'Joe Black',
      address: 'Sidney No. 1 Lake Park'
    },
    {
      key: '3',
      name: 'Joe Black',

      address: 'Sidney No. 1 Lake Park'
    },
    {
      key: '3',
      name: 'Joe Black',

      address: 'Sidney No. 1 Lake Park'
    },
    {
      key: '3',
      name: 'Joe Black',

      address: 'Sidney No. 1 Lake Park'
    },
    {
      key: '3',
      name: 'Joe Black',

      address: 'Sidney No. 1 Lake Park'
    },
    {
      key: '3',
      name: 'Joe Black',

      address: 'Sidney No. 1 Lake Park'
    },
    {
      key: '3',
      name: 'Joe Black',

      address: 'Sidney No. 1 Lake Park'
    },
    {
      key: '3',
      name: 'Joe Black',

      address: 'Sidney No. 1 Lake Park'
    },
    {
      key: '3',
      name: 'Joe Black',

      address: 'Sidney No. 1 Lake Park'
    },
    {
      key: '3',
      name: 'Joe Black',

      address: 'Sidney No. 1 Lake Park'
    }
  ];
  classForm: FormGroup = new FormGroup({
    classname: new FormControl('', [Validators.required]),
    owner: new FormControl('', [Validators.required]),
    limit: new FormControl(0, [Validators.required])
  });
  teachers: [];
  classes = [];
  deleteId = '';

  constructor(
    private req: RequestService,
    private message: NzMessageService,
  ) { }

  addClass() {
    this.isVisible = true;
  }

  handleCancel() {
    this.isVisible = false;
  }

  handleOk() {
    if (!this.classForm.valid) {
      this.message.error('请正确填写课程信息！');
      return;
    } else {
      this.requestAdd();
    }
  }

  requestAdd() {
    this.req.addClass(this.classForm.value).subscribe(res => {
      if (res.code) {
        this.message.success(res.message);
        this.isVisible = false;
        this.queryClasses();
      } else {
        this.message.error(res.message);
      }
    });
  }

  handleDelete(id) {
    this.deleteId = id;
    this.isDeleteVisible = true;
  }

  queryTeacher() {
    this.req.queryTeacher().subscribe(res => {
      if (res.code) {
        this.teachers = res.data.teachers;
      } else {
        this.message.error(res.message);
      }
    });
  }

  queryClasses() {
    this.req.queryClass().subscribe(res => {
      if (res.code) {
        this.classes = res.data.classes;
      } else {
        this.message.error(res.message);
      }
    });
  }

  handleCancelDelete() {
    this.isDeleteVisible = false;
  }

  handleOkDelete() {
    if (this.deleteId) {
      this.req.deleteClass(this.deleteId).subscribe(res => {
        if (res.code) {
          this.message.success(res.message);
          this.isDeleteVisible = false;
          this.queryClasses();
        } else {
          this.message.error(res.message);
        }
      });
    }
  }

  ngOnInit() {
    this.queryTeacher();
    this.queryClasses();
  }
}

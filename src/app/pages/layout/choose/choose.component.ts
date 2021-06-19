import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';
import { RequestService } from 'src/app/service/request.service';

@Component({
  selector: 'app-choose',
  templateUrl: './choose.component.html',
  styleUrls: ['./choose.component.scss']
})
export class ChooseComponent implements OnInit {
  classes = [];
  userId = '';

  constructor(
    private req: RequestService,
    private message: NzMessageService
  ) { }

  queryClasses() {
    this.req.queryClass().subscribe(res => {
      if (res.code) {
        this.classes = res.data.classes;
      } else {
        this.message.error(res.message);
      }
    });
  }

  handleSelect(data) {
    this.req.chooseClass({
      classId: data.id,
      userId: this.userId
    }).subscribe(res => {
      if (res.code) {
        this.message.success(res.message);
        this.queryClasses();
      } else {
        this.message.error(res.message);
      }
    });
  }

  ngOnInit() {
    const {id} = JSON.parse(sessionStorage.getItem('user'));
    this.userId = id;
    this.queryClasses();
  }

}

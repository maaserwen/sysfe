import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';
import { RequestService } from 'src/app/service/request.service';

@Component({
  selector: 'app-query-class',
  templateUrl: './query-class.component.html',
  styleUrls: ['./query-class.component.scss']
})
export class QueryClassComponent implements OnInit {
  classes = [];

  constructor(
    private req: RequestService,
    private message: NzMessageService
  ) { }

  queryClasses(id) {
    this.req.queryClassByUser(id).subscribe(res => {
      if (res.code) {
        this.classes = res.data.classes;
      } else {
        this.message.error(res.message);
      }
    });
  }

  ngOnInit() {
    const {id} = JSON.parse(sessionStorage.getItem('user'));
    this.queryClasses(id);
  }

}

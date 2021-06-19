import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';
import { RequestService } from 'src/app/service/request.service';

@Component({
  selector: 'app-query',
  templateUrl: './query.component.html',
  styleUrls: ['./query.component.scss']
})
export class QueryComponent implements OnInit {
  classes = [];

  constructor(
    private req: RequestService,
    private message: NzMessageService
  ) { }

  queryClasses(id) {
    this.req.queryScore(id).subscribe(res => {
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

import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';
import { RequestService } from 'src/app/service/request.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {
  editId: string | null = null;
  classes = [];

  constructor(
    private req: RequestService,
    private message: NzMessageService
  ) { }

  queryClasses(id) {
    this.req.queryClassByOwner(id).subscribe(res => {
      if (res.code) {
        this.classes = res.data.classes;
      } else {
        this.message.error(res.message);
      }
    });
  }

  startEdit(id: string): void {
    this.editId = id;
  }

  stopEdit(): void {
    this.editId = null;
  }

  uploadData(klass) {
    this.req.uploadScore({
      id: klass.id,
      score: this.classes.find(el => el.id === klass.id).students.map(el => ({
        user: el.id,
        score: el.score
      }))
    }).subscribe(res => {
      if (res.code) {
        this.message.success(res.message);
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

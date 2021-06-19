import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd';
import { SignUpModel } from 'src/app/interfaces/global';
import { UserInfoRes } from 'src/app/service/request-interface';
import { RequestService } from 'src/app/service/request.service';

@Component({
  selector: 'app-accout',
  templateUrl: './accout.component.html',
  styleUrls: ['./accout.component.scss']
})
export class AccoutComponent implements OnInit {
  loading = false;
  signUpForm: FormGroup = new FormGroup({
    username: new FormControl('', [
      Validators.required
    ]),
    password: new FormControl('', [
      Validators.required
    ]), // 至少八个字符，至少一个字母和一个数字
    role: new FormControl('1', [Validators.required]),
  });

  constructor(
    private message: NzMessageService,
    private route: Router,
    private req: RequestService,
  ) { }

  handleOk() {
    if (!this.signUpForm.valid) {
      this.message.error('请正确填写注册信息！');
      return;
    } else {
      this.signUp();
    }
  }

  signUp() {
    this.loading = true;
    const data: SignUpModel = Object.assign({}, this.signUpForm.value);
    this.req.signUp(data).subscribe((res: UserInfoRes) => {
      if (res.status !== 'SUCCESS') {
        this.message.error(res.message);
      } else {
        this.message.success(res.message);
      }
      this.loading = false;
    });
  }

  ngOnInit() {
  }

}

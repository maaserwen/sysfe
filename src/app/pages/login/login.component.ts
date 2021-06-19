import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { NzMessageService } from 'ng-zorro-antd';
import { SignInModel } from 'src/app/interfaces/global';
import { saveUserInfo } from 'src/app/reducers/actions';
import { StoreStates } from 'src/app/reducers/storeState';
import { UserInfoRes } from 'src/app/service/request-interface';
import { RequestService } from 'src/app/service/request.service';
import { Md5 } from 'ts-md5';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loading = false;
  signInForm: FormGroup = new FormGroup({
    username: new FormControl('', [
      Validators.required
    ]),
    password: new FormControl('', [
      Validators.required
    ]),
    role: new FormControl('1', [Validators.required]),
  });

  constructor(
    private message: NzMessageService,
    private route: Router,
    private req: RequestService,
    private store: Store<StoreStates>) { }

  handleOk() {
    if (!this.signInForm.valid) {
      this.message.error('请正确填写登录信息！');
      return;
    } else {
      this.signIn();
    }
  }

  signIn() {
    this.loading = true;
    const data: SignInModel = Object.assign({}, this.signInForm.value, { password: Md5.hashStr(this.signInForm.value.password) });
    this.req.signIn(data).subscribe((res: UserInfoRes) => {
      if (res.status !== 'SUCCESS') {
        this.message.error(res.message);
      } else {
        this.message.success(res.message);
        this.store.dispatch(saveUserInfo(res.data.user));
        sessionStorage.setItem('user', JSON.stringify(res.data.user));
      }
      this.loading = false;
      this.route.navigate(['/main']);
    });
  }

  ngOnInit() {
    const {username} = JSON.parse(sessionStorage.getItem('user'));
    if (username) {
      this.route.navigate(['/main']);
    }
  }
}

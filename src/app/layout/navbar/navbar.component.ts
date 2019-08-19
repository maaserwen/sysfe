import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RequestService } from 'src/app/service/request.service';
import { UserInfoRes } from 'src/app/service/request-interface';
import { Store } from '@ngrx/store';
import { StoreStates, UserInfoState } from 'src/app/reducers/storeState';
import { Observable } from 'rxjs';
import { saveUserInfo } from 'src/app/reducers/actions';
import { NzMessageService } from 'ng-zorro-antd';
import {Md5} from 'ts-md5/dist/md5';
import { SignInModel, SignUpModel } from 'src/app/interfaces/global';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isVisible = true;
  showSignUp = false;
  signInForm: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.pattern(/^([a-zA-Z0-9_\u4e00-\u9fa5]{3,10})$/)]),
    password: new FormControl('', [Validators.required, Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,16}$/)]) // 至少八个字符，至少一个字母和一个数字
  });
  signUpForm: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.pattern(/^([a-zA-Z0-9_\u4e00-\u9fa5]{3,10})$/)]),
    password: new FormControl('', [Validators.required, Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,16}$/)]), // 至少八个字符，至少一个字母和一个数字
    comfirmPassword: new FormControl('', [Validators.required, Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,16}$/)]),
    mail: new FormControl('', [Validators.required, Validators.email])
  });
  userInfo$: Observable<UserInfoState>;
  loading = false;

  constructor(
    private message: NzMessageService,
    private req: RequestService,
    private store: Store<StoreStates>
  ) {
    this.userInfo$ = store.select('userInfo');
  }

  showLoginModal() {
    this.signInForm.reset();
    this.signUpForm.reset();
    this.isVisible = true;
  }

  updateConfirmValidator(): void {
    this.signUpForm.controls.comfirmPassword.updateValueAndValidity();
  }

  handleOk() {
    if (this.showSignUp) {
      if (!this.signUpForm.valid) {
        this.message.error('请正确填写注册信息！');
        return;
      } else {
        this.signUp();
      }
    } else {
      if (!this.signInForm.valid) {
        this.message.error('请正确填写登录信息！');
        return;
      } else {
        this.signIn();
      }
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
        this.store.dispatch(saveUserInfo(res.data.user));
        localStorage.setItem('token', res.data.token);
        this.isVisible = false;
      }
      this.loading = false;
    });
  }

  signIn() {
    this.loading = true;
    const data: SignInModel = Object.assign({}, this.signInForm.value, { password: Md5.hashStr(this.signInForm.value.password)});
    this.req.signIn(data).subscribe((res: UserInfoRes) => {
      if (res.status !== 'SUCCESS') {
        this.message.error(res.message);
      } else {
        this.message.success(res.message);
        this.store.dispatch(saveUserInfo(res.data.user));
        localStorage.setItem('token', res.data.token);
        this.isVisible = false;
      }
      this.loading = false;
    });
  }

  handleCancel() {
    this.isVisible = false;
  }

  ngOnInit() {
  }

}

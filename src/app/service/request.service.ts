import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { SignInModel, SignUpModel } from '../interfaces/global';
import { UserInfoRes } from './request-interface';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(
    private http: HttpClient
  ) { }

  saveBlog(data): Observable<object> {
    return this.http.post('/blog/saveBlog', data);
  }

  uploadFile(data): Observable<object> {
    const formdata = new FormData();
    formdata.append('file', data);
    return this.http.post('/file/upload', data);
  }

  signUp(data: SignUpModel): Observable<object | UserInfoRes> {
    return this.http.post('/users/signUp', data);
  }

  signIn(data: SignInModel): Observable<object | UserInfoRes> {
    return this.http.post('/users/signIn', data);
  }
}

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

  signUp(data: SignUpModel): Observable<object | UserInfoRes> {
    return this.http.post('/users/signUp', data);
  }

  signIn(data: SignInModel): Observable<object | UserInfoRes> {
    return this.http.post('/users/signIn', data);
  }

  queryScore(id): Observable<any> {
    return this.http.get(`/class/queryScore?id=${id}`);
  }

  queryTeacher(): Observable<any> {
    return this.http.get('/teacher/teachers');
  }

  addClass(data: any): Observable<any> {
    return this.http.post('/class/add', data);
  }

  queryClass(): Observable<any> {
    return this.http.get('/class/query');
  }

  queryClassByUser(id): Observable<any> {
    return this.http.get(`/class/queryByUser?id=${id}`);
  }

  deleteClass(id: string): Observable<any> {
    return this.http.get(`/class/delete?id=${id}`);
  }

  chooseClass(data: any): Observable<any> {
    return this.http.post(`/class/choose`, data);
  }

  queryClassByOwner(id): Observable<any> {
    return this.http.get(`/class/queryByOwner?id=${id}`);
  }

  uploadScore(data): Observable<any>  {
    return this.http.post('/class/uploadScore', data);
  }
}

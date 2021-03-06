import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { Response } from '../models/response';
import { User } from '../models/user';

import { AlertService } from './alert.service';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type' : 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  api = 'http://localhost:3000/api/auth';

  constructor(private http: HttpClient, private alert: AlertService) { }

  getToken(): string {
    return localStorage.getItem('token');
  }

  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  isLoggedIn() {
    if(this.getToken()){
      return true;
    }
    else{
      return false;
    }
    //return this.getToken() != '' ? true : false;
  }

  // api error handler
  errorHandler<T>(action: string, result?: T) {
    return (error: any): Observable<T> => {
      console.error(action, error);
      return of(result as T);
    };
  }

  // login function - get jwt token from backend
  login(user: User): Observable<string> {
    return this.http.post<Response>(this.api + '/login', { username: user.username, password: user.password }, httpOptions).pipe(
      map(res => {
        const status = res.status;
        if(status == 'ok'){
          this.setToken(res.data);

          //show alert
          this.alert.toggleAlert('login')
        }
        return status;
      }),
      catchError(this.errorHandler('login'))
    );
  }

  // register function - sent user object to backend and expect status
  register(user: User): Observable<string> {
    return this.http.post<Response>(this.api + '/register', { user }, httpOptions).pipe(
      map(res => {
        const status = res.status;
        this.setToken(res.data);
        return status;
      }),
      catchError(this.errorHandler('register'))
    );
  }


}

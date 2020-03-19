import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { Response } from '../models/response';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type' : 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  api = 'http://localhost:3000/api/auth';

  constructor(private http: HttpClient) { }

  getToken(): string {
    return localStorage.getItem('token');
  }

  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

   // api error handler
   errorHandler<T>(action: string, result?: T) {
    return (error: any): Observable<T> => {
      console.error(action, error);
      return of(result as T);
    };
  }

  // login function - get jwt token from backend
  login(username: string, password: string): Observable<string> {
    return this.http.post<Response>(this.api + '/login', {username, password}, httpOptions).pipe(
      map(res => {
        const token = res.data;
        return token;
      }),
      catchError(this.errorHandler('login'))
    );
  }

  register(username: string, password: string): Observable<string> {
    return this.http.post<Response>(this.api + '/register', {username, password}, httpOptions).pipe(
      map(res => {
        const token = res.data;
        return token;
      }),
      catchError(this.errorHandler('register'))
    );
  }


}

import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Post } from '../models/post';
import { Response } from '../models/response';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type' : 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  api = 'http://localhost:3000/api/posts';

  constructor(private http: HttpClient) { }

  getUrl(id?: string): string {
    return this.api + '/' + id;
  }

  // api error handler
  errorHandler<T>(action: string, result?: T) {
    return (error: any): Observable<T> => {
      console.error(action, error);
      return of(result as T);
    };
  }

  getPosts(): Observable<Post[]> {
    return this.http.get<Response>(this.api).pipe(
      map(res => {
        return res.data.map(post => new Post(post._id, post.title, post.content, new Date(post.createDate)));
      }),
      catchError(this.errorHandler('getPosts', []))
    );
  }

  getPost(id: string): Observable<Post> {
    return this.http.get<Response>(this.api + '/' + id).pipe(
      map(res => {
        const post = res.data;
        return new Post(post._id, post.title, post.content, new Date(post.createDate));
      }),
      catchError(this.errorHandler<Post>('getPost id=' + id))
    );
  }

  /*addProduct (product): Observable<Post> {
    return this.http.post<Post>(api, product, httpOptions).pipe(
      tap((product: Post) => console.log(`added product w/ id=${product.id}`)),
      catchError(this.handleError<Post>('addProduct'))
    );
  }

  updateProduct (id, product): Observable<any> {
    const url = `${api}/${id}`;
    return this.http.put(url, product, httpOptions).pipe(
      tap(_ => console.log(`updated product id=${id}`)),
      catchError(this.handleError<any>('updateProduct'))
    );
  }

  deleteProduct (id): Observable<Post> {
    const url = `${api}/${id}`;

    return this.http.delete<Post>(url, httpOptions).pipe(
      tap(_ => console.log(`deleted product id=${id}`)),
      catchError(this.handleError<Post>('deleteProduct'))
    );
  }*/
}

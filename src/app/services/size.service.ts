import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class SizeService {

  constructor() { }

  sizeChange(): Observable<any>{
    const sizeObserver = new Observable(observer => {
      window.onresize = () => {
        observer.next(window.screen.width);
      };
      window.onload = () => {
        observer.next(window.screen.width);
      };
    });
    return sizeObserver;
  }

}

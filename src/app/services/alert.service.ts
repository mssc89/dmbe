import { Injectable, EventEmitter, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor() { }

  @Output() toggler: EventEmitter<any> = new EventEmitter();

  // toggle alert by its id
  toggle(id: string, status: boolean) {
    this.toggler.emit( {id, status} );
  }
}

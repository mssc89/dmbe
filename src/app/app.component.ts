import { Component } from '@angular/core';
import { ModalService } from './services/modal.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  languages = [
    { 'name':'English', 'abb':'en' },
    { 'name':'Polish', 'abb':'pl' }
  ]; // test translation list, it should be received from the API

  constructor(private modal: ModalService, public translate: TranslateService) {
    translate.setDefaultLang('en');
    translate.use('en');
  }

  login(){
    this.modal.toggle('login', true);
  }

  register(){
    this.modal.toggle('register', true);
  }

}

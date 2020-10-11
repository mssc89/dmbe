import { Component } from '@angular/core';
import { ModalService } from './services/modal.service';
import { TranslateService } from '@ngx-translate/core';
import { SizeService } from 'src/app/services/size.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  screenSize;

  languages = [
    { 'name':'English', 'abb':'en' },
    { 'name':'Polish', 'abb':'pl' }
  ]; // test translation list, it should be received from the API

  constructor(private modal: ModalService, public translate: TranslateService, private size: SizeService) {
    translate.setDefaultLang('en');
    translate.use('en');
    this.size.sizeChange().subscribe(screenSize => {
      this.screenSize = screenSize;
    });
  }

  changeLanguage(lang: string){
    this.translate.use(lang);
    localStorage.setItem('lang', lang);
  }

  login(){
    this.modal.toggle('login', true);
  }

  register(){
    this.modal.toggle('register', true);
  }

}

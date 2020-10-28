import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { ModalService } from './services/modal.service';
import { TranslateService } from '@ngx-translate/core';
import { SizeService } from 'src/app/services/size.service';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @ViewChild('modal', { read: ViewContainerRef }) viewContainerRef: ViewContainerRef

  screenSize;

  // test translation list, it should be received from the API
  languages = [
    { name: 'English', abb: 'en' },
    { name: 'Polski', abb: 'pl' }
  ]; 

  constructor(private modal: ModalService, public translate: TranslateService, private size: SizeService, public auth: AuthService, viewContainerRef:ViewContainerRef) {
    if (localStorage.getItem('lang') === null) {
      const browserLang = translate.getBrowserLang();
      translate.use(browserLang.match(/en|de|es|pl|ru|zh|fr|hi|ja|pt|it/) ? browserLang : 'en');
    }
    else{
      translate.use(localStorage.getItem('lang'));
    }

    this.size.sizeChange().subscribe(screenSize => {
      this.screenSize = screenSize;
    });

    this.viewContainerRef = viewContainerRef;
  }

  ngOnInit() {
    this.modal.setRootViewContainerRef(this.viewContainerRef)
  }

  changeLanguage(lang: string){
    this.translate.use(lang);
    localStorage.setItem('lang', lang);
  }

  login(){
    this.modal.toggleModal('login')
  }

  register(){
    this.modal.toggleModal('register')
  }

}

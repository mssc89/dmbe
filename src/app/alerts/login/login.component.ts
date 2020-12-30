import { Component } from '@angular/core';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginAlertComponent {

  status = true;

  constructor() { }

  destroyAlert(){};

  toggleAlert(name: string){};

  openChange(event){
    if(event == false){
      this.destroyAlert();
    }
  }

}

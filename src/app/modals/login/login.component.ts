import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  status = true;
  error = false; // login error, bad password for example

  formModel = {
    user: new User(),
  };

  constructor( private api: AuthService) { }

  destroyModal(){};

  toggleModal(name: string){};

  openChange(event){
    if(event == false){
      this.destroyModal();
    }
  }

  login() {
    this.api.login(this.formModel.user).subscribe(res => {
      if(res == 'error'){
        this.error = true;
      }
      else if(res == 'ok'){
        this.destroyModal();
      }
    }, err => {
      this.error = true;
      console.log(err);
    });
  }

  register(){
    this.toggleModal('register');
    this.destroyModal();
  }
}

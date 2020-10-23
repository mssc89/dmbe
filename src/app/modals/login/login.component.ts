import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  status = false;
  error = false; // login error, bad password for example

  formModel = {
    user: new User(),
  };

  constructor(private modal: ModalService, private api: AuthService) { }

  ngOnInit(): void {
    this.modal.toggler.subscribe(call => {
      if (call.id == 'login') {
        this.status = call.status;
      }
    });
  }

  login() {
    this.api.login(this.formModel.user).subscribe(res => {
      if(res == 'error'){
        this.error = true;
      }
      else if(res == 'ok'){
        this.modal.toggle('login', false);
      }
    }, err => {
      this.error = true;
      console.log(err);
    });
  }

  register(){
    this.modal.toggle('login', false);
    this.modal.toggle('register', true);
  }

}

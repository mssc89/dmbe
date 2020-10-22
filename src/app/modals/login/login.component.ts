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
  error = false; //login error, bad password for example

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

  logi() {
    this.api.login(this.formModel.user).subscribe(res => {

    }, err => {
      console.log(err);
    });
  }

}

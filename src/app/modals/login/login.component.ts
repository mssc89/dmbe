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

  formModel = {
    user: new User(null, '', '', '', '', null),
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

    }, err => {
      console.log(err);
    });
  }

}

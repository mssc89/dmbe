import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  status = false;

  constructor(private modal: ModalService) { }

  ngOnInit(): void {
    this.modal.toggler.subscribe(call => {
      if (call.id == 'login') {
        this.status = call.status;
      }
    });
  }

}

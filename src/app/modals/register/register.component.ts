import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';
import { ClrWizard } from '@clr/angular';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  status = false; // whether modal is open or not

  @ViewChild('wizard') wizard: ClrWizard;

  formModel = {
    user: new User(null, '', '', '', null),
    password: ''
  };

  constructor(private modal: ModalService) { }

  ngOnInit(): void {
    this.modal.toggler.subscribe(call => {
      if (call.id == 'register') {
        this.status = call.status;
      }
    });
  }

}
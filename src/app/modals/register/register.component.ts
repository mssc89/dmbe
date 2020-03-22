import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';
import { ClrWizard } from '@clr/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  @ViewChild('wizard') wizard: ClrWizard;
  @ViewChild("number") numberFi: any;

  model = {
      name: "",
      favorite: "",
      number: ""
  };

  status = false;

  constructor(private modal: ModalService) { }

  ngOnInit(): void {
    this.modal.toggler.subscribe(call => {
      if (call.id == 'register') {
        this.status = call.status;
      }
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

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

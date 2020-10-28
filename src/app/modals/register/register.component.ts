import { Component, ViewChild } from '@angular/core';
import { ClrWizard } from '@clr/angular';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  status = true;

  @ViewChild('wizard') wizard: ClrWizard;

  formModel = {
    user: new User(),
  };

  constructor(private api: AuthService) { }

  destroyModal(){};

  toggleModal(name: string){};

  openChange(event){
    if(event == false){
      this.destroyModal();
    }
  }

  register(): void {
    this.api.register(this.formModel.user).subscribe(res => {

    }, err => {
      console.log(err);
    });
  }

}

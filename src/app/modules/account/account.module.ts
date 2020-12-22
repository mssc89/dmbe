import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { AccountComponent } from './account.component';
import { ViewComponent } from './view/view.component';


@NgModule({
  declarations: [AccountComponent, ViewComponent],
  imports: [
    CommonModule,
    AccountRoutingModule
  ]
})
export class AccountModule { }

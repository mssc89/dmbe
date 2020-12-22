import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccountComponent } from './account.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  { path: '', component: AccountComponent, children: [
    { path: '', component: ViewComponent },
    { path: ':id', component: ViewComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }

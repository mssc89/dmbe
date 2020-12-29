import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UtilsRoutingModule } from './utils-routing.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { SharedModule } from '../../shared/shared.module';
import { ServerErrorComponent } from './server-error/server-error.component';


@NgModule({
  declarations: [
    NotFoundComponent,
    ServerErrorComponent
  ],
  imports: [
    CommonModule,
    UtilsRoutingModule,
    SharedModule
  ]
})
export class UtilsModule { }

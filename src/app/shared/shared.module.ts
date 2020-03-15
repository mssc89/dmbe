import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ClarityModule } from '@clr/angular';
import { TruncateModule } from '@yellowspot/ng-truncate';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ClarityModule,
    TruncateModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ClarityModule,
    TruncateModule
  ]
})
export class SharedModule { }

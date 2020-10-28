import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { JwtModule } from '@auth0/angular-jwt';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './modals/login/login.component';
import { RegisterComponent } from './modals/register/register.component';
import { LoginModalComponent } from './alerts/login/login.component';

export function tokenGetter() {
  return localStorage.getItem('token');
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    LoginModalComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    JwtModule.forRoot({
      config: {
        tokenGetter,
        allowedDomains: ["localhost"],
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

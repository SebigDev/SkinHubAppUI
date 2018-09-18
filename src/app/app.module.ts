import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";


import { AppComponent } from './layout/app.component';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { UserService } from './common/user/user.service';


@NgModule({
  declarations: [
    AppComponent, 
    HomeComponent, 
    RegistrationComponent, 
    LoginComponent
  ],
  imports: [
    BrowserModule, 
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'register', component: RegistrationComponent }, 
      { path: 'sign-in', component: LoginComponent}
    ]),
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }

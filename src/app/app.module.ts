import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";



import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { RegisterComponent } from './pages/auth/registration/register.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { HeaderComponent } from './layout/header/header.component';
import { MemberService, ColorTypeService, GenderTypeService } from '../shared/client-services/index';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule, 
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent},
      { path: 'auth/register', component: RegisterComponent },
      { path: 'auth/login', component: LoginComponent },
      { path: '**', redirectTo: '', pathMatch: 'full' }
      
    ]),
  ],
  providers: [
    MemberService,
    ColorTypeService,
    GenderTypeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

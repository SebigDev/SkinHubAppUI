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
import { MemberService, ColorTypeService, GenderTypeService, ProductListTypeService, ProductTypeService } from '../shared/client-services/index';
import { AppRoutingModule } from './app.routing';
import { ContentModule } from './pages/contents/content.module';



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
    AppRoutingModule,
    ContentModule
  ],

  providers: [
    MemberService,
    ColorTypeService,
    GenderTypeService,
    ProductListTypeService,
    ProductTypeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

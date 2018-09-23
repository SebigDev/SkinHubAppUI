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
import { HeaderComponent } from './layout/header/header.component';
import { PostsComponent } from './posts/posts.component';
import { PostComponent } from './posts/post/post.component';
import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './products/product/product.component';
import { PostService } from './posts/post.service';


@NgModule({
  declarations: [
    AppComponent, 
    HomeComponent, 
    RegistrationComponent, 
    LoginComponent, HeaderComponent, PostsComponent, PostComponent, ProductsComponent, ProductComponent
  ],
  imports: [
    BrowserModule, 
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'register', component: RegistrationComponent }, 
      { path: 'sign-in', component: LoginComponent}, 
      { path: 'posts/:id', component: PostComponent },
      { path: 'posts', component: PostsComponent }
    ]),
  ],
  providers: [UserService, PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }

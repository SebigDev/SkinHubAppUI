import { Component, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
    selector: 'app-login', 
    templateUrl: './login.component.html'
})

export class LoginComponent {

    @ViewChild('f') loginForm: NgForm;

    onLogin() {
        console.log(this.loginForm);
    }
}
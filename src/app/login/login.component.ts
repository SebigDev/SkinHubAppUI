import { Component, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { UserService } from "../common/user/user.service";
import { LoginUserDTO } from "../common/models/loginUserDTO";

@Component({
    selector: 'app-login', 
    templateUrl: './login.component.html', 
    providers: [UserService]
})

export class LoginComponent {

    @ViewChild('f') loginForm: NgForm;

    loginUser: LoginUserDTO; 

    constructor(private _userService: UserService) { 
        this.loginUser = new LoginUserDTO();
    }

    onLogin() {
        if(this.loginForm.valid) {
            this.loginUser.username = this.loginForm.value.username;
            this.loginUser.emailAddress = this.loginForm.value.email;
            this.loginUser.password = this.loginForm.value.password;

            this._userService.login(this.loginUser)
                .subscribe(data => {
                    console.log(data);
                    console.log('login successful');
                })

            this.loginForm.reset();
        }
    }
}
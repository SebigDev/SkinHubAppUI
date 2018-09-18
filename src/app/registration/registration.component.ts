import { Component, ViewChild } from "@angular/core";
import { NgForm, NgModel } from "@angular/forms";
import { UserService } from "../common/user/user.service";
import { RegisterUserDTO } from "../common/models/registerUserDTO";

@Component({
    selector: 'app-registration', 
    templateUrl: './registration.component.html', 
    providers: []
})

export class RegistrationComponent {

    @ViewChild('f') registrationForm: NgForm;

    constructor(private _userService: UserService) {}

    onRegister() {
        let userData = new RegisterUserDTO();
        userData.firstname = this.registrationForm.value.firstname, 
        userData.middlename = this.registrationForm.value.middlename, 
        userData.lastname = this.registrationForm.value.lastname, 
        userData.gender = this.registrationForm.value.gender,
        // userData.dateOfBirth = this.registrationForm.value.dateOfBirth, 
        userData.username = this.registrationForm.value.username, 
        userData.emailAddress = this.registrationForm.value.email, 
        userData.password = this.registrationForm.value.password
        
        this._userService.register(userData);

        this.registrationForm.reset();
    }
}
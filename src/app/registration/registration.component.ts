import { Component, ViewChild } from "@angular/core";
import { NgForm, NgModel } from "@angular/forms";
import { UserService } from "../common/user/user.service";
import { RegisterUserDTO } from "../common/models/registerUserDTO";

@Component({
    selector: 'app-registration', 
    templateUrl: './registration.component.html', 
    providers: [UserService]
})

export class RegistrationComponent {

    @ViewChild('f') registrationForm: NgForm;

    userData: RegisterUserDTO;

    constructor(private _userService: UserService) {
        this.userData = new RegisterUserDTO();
    }

    onRegister() {
        this.userData.firstname = this.registrationForm.value.firstname, 
        this.userData.middlename = this.registrationForm.value.middlename, 
        this.userData.lastname = this.registrationForm.value.lastname, 
        // this.userData.gender = this.registrationForm.value.gender,
        // this.userData.dateOfBirth = this.registrationForm.value.dateOfBirth, 
        this.userData.username = this.registrationForm.value.username, 
        this.userData.emailAddress = this.registrationForm.value.email, 
        this.userData.password = this.registrationForm.value.password
        
        this._userService.register(this.userData)
            .subscribe(data => {
                console.log("Registration successful.");
            });

        this.registrationForm.reset();
    }
}
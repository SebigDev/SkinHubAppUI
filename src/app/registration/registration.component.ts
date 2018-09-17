import { Component, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
    selector: 'app-registration', 
    templateUrl: './registration.component.html'
})

export class RegistrationComponent {

    @ViewChild('f') registrationForm: NgForm;

    onRegister() {
        console.log(this.registrationForm);
    }
}
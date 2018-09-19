import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { RegisterUserDTO } from "../models/registerUserDTO";
import { LoginUserDTO } from "../models/loginUserDTO";

@Injectable()
export class UserService {

    private registrationApi: string = 'http://localhost:19313/api/member/register';
    private loginApi: string = 'http://localhost:19313/api/member/login';

    constructor(private _http: HttpClient) {}

    register( user: RegisterUserDTO ) {
        return this._http.post<number>(this.registrationApi, user);
    }

    login(user: LoginUserDTO) {
        console.log(user);
        return this._http.post(this.loginApi, user);
    }
}

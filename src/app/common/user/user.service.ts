import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { RegisterUserDTO } from "../models/registerUserDTO";

@Injectable()
export class UserService {

    private registrationApi: string = 'http://localhost:50781/api/member/register';
    private loginApi: string = 'http://localhost:50781/api/member/login';

    constructor(private _http: HttpClient) {}

    register( user: RegisterUserDTO ) {
        console.log(user)
        return this._http.post<number>(this.registrationApi, user);
    }
}

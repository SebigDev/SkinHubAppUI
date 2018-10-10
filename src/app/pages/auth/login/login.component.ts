import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { MemberService, MemberDto } from '../../../../shared/client-services/index';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  encapsulation: ViewEncapsulation.None

})

export class LoginComponent implements OnInit {
  memberId: any;
  showLoginForm: boolean = true;
  showUpdateForm: boolean = false;
  showWarning: boolean = false;
  model: any = {};

  _error;

  memberLogin: any;
  memberUpdate: MemberDto = {};


  constructor(
    private _router: Router,
    private _activatedRoute: ActivatedRoute,
    private _userServices: MemberService,
  ) { }


  ngOnInit(): void {
    this.showLoginForm = true;
    this.isloggedIn();

  }

  //method to login a member
  saveMemberLogin(): void {
    this._userServices.apiMemberLoginPost(this.model)
      .subscribe((result: any) => {
        this.memberLogin = result;
        localStorage.setItem("token", JSON.stringify(result));
        this.veryUserUpdate(this.model.username);

      }, (error) => {
        // this._error = error;
        // console.log(error);
        this.returnError();
      })
  }

  //verifyUpdate
  veryUserUpdate(username: string): void {
    this._userServices.apiMemberGetMemberByUsernameGet(username)
      .subscribe((result) => {
        this.memberId = result.id;
        if (result.firstname === null || result.lastname === null) {
          this.showUpdateInputForm();
        } else {
          this.redirectToDashboard();
        }
      })
  }

  //show Update Form
  showUpdateInputForm() {
    this.showLoginForm = false;
    this.showUpdateForm = true;
    this.memberUpdate.username;
  }

  //updateMember
  updateMember(): void {
    this.memberUpdate.id = this.memberId;
    this.memberUpdate.firstname = this.model.firstname;
    this.memberUpdate.middlename = this.model.middlename;
    this.memberUpdate.lastname = this.model.lastname;
    this.memberUpdate.dateOfBirth = this.model.dateOfBirth;
    this._userServices.apiMemberUpdateMemberPut(this.memberUpdate)
      .subscribe((result: any) => {
        console.log("Member Updated Successfully");
        this.redirectToDashboard();
      })
  }

  //checkIfloggedIn
  isloggedIn(): void {
    let token = localStorage.getItem("token");
    if (token) {
      this.veryUserUpdate(this.model.usernme);
    }
  }


  //method to redirect to the dashboard
  redirectToDashboard(): void {
    this._router.navigate(['/'])
  }

  returnError(): any {
    this.showWarning = true;
    return `Login Failed, Please Check your credentials`;
  }
}

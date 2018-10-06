import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { MemberService } from '../../../../shared/client-services/index';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  encapsulation: ViewEncapsulation.None

})

export class LoginComponent implements OnInit {
  token: void;
  model: any = {};

  memberLogin: any;


  constructor(
    private _router: Router,
    private _activatedRoute: ActivatedRoute,
    private _userServices: MemberService,
  ) { }


  ngOnInit(): void {
   
  }

  //method to login a member
  saveMemberLogin(): void {
    this._userServices.apiMemberLoginPost(this.model)
      .subscribe((result: any) => {
        this.memberLogin = result;
        localStorage.setItem("token", this.model);
        this.redirectToDashboard();

      }, (error) => {
        console.log(error);
      })
  }

  //method to redirect to the dashboard
  redirectToDashboard(): void {
    this._router.navigate(['/'])
  }
}

import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MemberService, MemberDto, RegisterDto, ColorTypeService, GenderTypeService } from '../../../../shared/client-services/index';

import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  encapsulation: ViewEncapsulation.None
})

export class RegisterComponent implements OnInit{
  colors: any[] = [];
  registerDto: RegisterDto = {};
  model: any = {};
  userCreated: any;
 

  constructor(
    private _router: Router,
    private _activatedRoute: ActivatedRoute,
    private _userServices: MemberService,
    private _colorServices: ColorTypeService,
    private _genderServices: GenderTypeService
  ) { }


  ngOnInit(): void {
    this.isloggedIn();
  }

  //method to save a member
  saveMemberRegistration(): void {
    //byPass nullity by model equality
    this.registerDto = this.model;
    console.log(this.registerDto);
    this._userServices.apiMemberRegisterPost(this.registerDto)
      .subscribe((result: MemberDto) => {
        this.userCreated = result;
        console.log(`${result.username} created successfully`);
        this.redirectToLogin();

      }, (error) => {
        console.log(error);
      })
  }

  //checkIfloggedIn
  isloggedIn(): void {
    let token = localStorage.getItem("token");
    if (token) {
      this.redirectHome();
    }
  }


  //redirectToHome
  redirectHome(): void {
    this._router.navigate(['/'])
  }

  //redirect to login
  redirectToLogin(): void {
    this._router.navigate(['/auth/login'])
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private _router: Router,
    private _activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }

  //ckeck if logged in
  isLoggedin(): boolean {
    const token = localStorage.getItem("token");
    return !!token;
  }


  //logout
  logOut(): void {
    localStorage.removeItem("token");
    this.redirectToHome();
  }

  //redirect home after logout
  redirectToHome(): void {
    this._router.navigate(['/']);
  }
}

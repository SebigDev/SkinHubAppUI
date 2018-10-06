import { OnInit, Component, ViewEncapsulation } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: 'app-gender',
  templateUrl: './gender.component.html',
  encapsulation: ViewEncapsulation.None
})

export class GenderComponent implements OnInit {
  colors: any[];

  constructor(
    private _router: Router,
  ) { }

  ngOnInit(): void {

  }
}

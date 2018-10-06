import { OnInit, Component, ViewEncapsulation } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: 'app-women',
  templateUrl: './women.component.html',
  encapsulation: ViewEncapsulation.None
})

export class WomenComponent implements OnInit {
  colors: any[];

  constructor(
    private _router: Router,
  ) { }

  ngOnInit(): void {

  }
}

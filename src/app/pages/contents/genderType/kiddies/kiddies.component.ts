import { OnInit, Component, ViewEncapsulation } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: 'app-kiddies',
  templateUrl: './kiddies.component.html',
  encapsulation: ViewEncapsulation.None
})

export class KiddiesComponent implements OnInit {
  colors: any[];

  constructor(
    private _router: Router,
  ) { }

  ngOnInit(): void {

  }
}

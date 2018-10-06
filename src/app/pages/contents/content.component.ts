import { OnInit, Component, ViewEncapsulation } from "@angular/core";
import { Router } from "@angular/router";
import { ColorTypeService, MemberService } from "../../../shared/client-services/index";

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  encapsulation: ViewEncapsulation.None
})

export class ContentComponent implements OnInit {
  colors: any[];

  constructor(
    private _router: Router,
    private _colorServices: ColorTypeService,
    private _userServices: MemberService
  ) { }

  ngOnInit(): void {
   
  }
}

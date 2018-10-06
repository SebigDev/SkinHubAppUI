import { OnInit, Component, ViewEncapsulation } from "@angular/core";
import { Router } from "@angular/router";
import { ColorTypeService, MemberService } from "../../../../../shared/client-services/index";

@Component({
  selector: 'app-men',
  templateUrl: './men.component.html',
  encapsulation: ViewEncapsulation.None
})

export class MenComponent implements OnInit {
  colors: any[];

  constructor(
    private _router: Router,
    private _colorServices: ColorTypeService,
    private _userServices: MemberService
  ) { }

  ngOnInit(): void {
    this.getAllColors();

  }

  //getColorType
  getAllColors(): void {
    this._colorServices.apiColorTypeGetAllColorTypesGet()
      .subscribe((result: any[]) => {
        this.colors = result;
        console.log(this.colors);
      })
  }

  //getBackgroundColor
  getBackgroundColor(colorId: number): any {
    if (colorId === 1) {
      return `author-info author-info--dashboard mcolorbg4`;
    }
    else if (colorId === 2) {
      return `author-info author-info--dashboard mcolorbg2`;
    }
    else if (colorId === 3) {
      return `author-info author-info--dashboard mcolorbg3`;
    }
    else if (colorId === 4) {
      return `author-info author-info--dashboard mcolorbg1`;
    }
  }
}

import { OnInit, Component, ViewEncapsulation } from "@angular/core";
import { Router } from "@angular/router";
import { ColorTypeService, MemberService, ProductTypeService, ProductListTypeService } from "../../../../../shared/client-services/index";

@Component({
  selector: 'app-men',
  templateUrl: './men.component.html',
  encapsulation: ViewEncapsulation.None
})

export class MenComponent implements OnInit {
  productLists: any[];
  products: any[];
  colors: any[];
  showfair: boolean = true;
  shownotsofair: boolean = false;
  shownotsodark: boolean = false;
  showebony: boolean = false;

  constructor(
    private _router: Router,
    private _colorServices: ColorTypeService,
    private _userServices: MemberService,
    private _productServices: ProductTypeService,
    private _productListServices: ProductListTypeService
  ) { }

  ngOnInit(): void {
    this.showfair = true;
    this.getAllColors();
    this.getProducts();

  }


  //getColorType
  getAllColors(): void {
    this._colorServices.apiColorTypeGetAllColorTypesGet()
      .subscribe((result: any[]) => {
        this.colors = result;
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

  //getProducts
  getProducts(): void {
    this._productServices.apiProductTypeGetAllProductTypesGet()
      .subscribe((result: any[]) => {
        this.products = result;
      })
  }

  getBackgroundProduct(colorId: number): any {
    if (colorId === 1) {
      return `author-info author-info--dashboard mcolorbg4`;
    }
    else if (colorId === 2) {
      return `author-info author-info--dashboard mcolorbg2`;
    }
    else if (colorId === 3) {
      return `author-info author-info--dashboard mcolorbg1`;
    }
  }



  //getAllProductLists

  getAllProductListsByProductTypeID(id: number): void {
    this._productListServices.apiProductListTypeGetProductListTypesByProductTypeIDGet(id)
      .subscribe((result: any[]) => {
        this.productLists = result;
      })
  }

  //gettextColor
  getCollapseId(id: number): any {
    if (id === 1) {
      return `collapse1`;
    }
    else if (id === 2) {
      return `collapse2`;
    }
    else if (id === 3) {
      return `collapse3`;
    }
  }

  gePanel(id: number): string {
    if (id === 1) {
      return `panel-one`;
    }
    else if (id === 2) {
      return `panel-two`;
    }
    else if (id === 3) {
      return `panel-three`;
    }
  }
  //getPopUp
  displayContent(colorId: number): void {
    if (colorId === 1) {
      this.showfair = true;
      this.shownotsodark = false;
      this.shownotsofair = false;
      this.showebony = false;
    }
    else if (colorId === 2) {
      this.showfair = false;
      this.shownotsodark = false;
      this.shownotsofair = true;
      this.showebony = false;
     
    }
    else if (colorId === 3) {
      this.showfair = false;
      this.shownotsodark = true;
      this.shownotsofair = false;
      this.showebony = false;
      
    }
    else if (colorId === 4) {
      this.showfair = false;
      this.shownotsodark = false;
      this.shownotsofair = false;
      this.showebony = true;
     
    }

  }



  //gotoProductListPage

  goToProductList(id: number): void {
    this._router.navigate(['contents/productcategory', id])
  }




}

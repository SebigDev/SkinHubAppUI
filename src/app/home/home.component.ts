import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { ColorTypeService, MemberService, GenderTypeService, ProductTypeService, ProductListTypeService } from '../../shared/client-services/index';
import { Router } from '@angular/router';

@Component({
    selector: 'app-home', 
  templateUrl: './home.component.html',
  encapsulation: ViewEncapsulation.None
})

export class HomeComponent implements OnInit{
  genders: any[];
  products: any[];
  productLists: any[]; 

  constructor(
    private _router: Router,
    private _colorServices: ColorTypeService,
    private _userServices: MemberService,
    private _genderServices: GenderTypeService,
    private _productServices: ProductTypeService,
    private _productListServices: ProductListTypeService
  ) { }

  ngOnInit(): void {
    this.getGenderTypes();
    this.getProductTypes();
    this.getProductListTypes();
  }

  //get gender type
  getGenderTypes(): void {
    this._genderServices.apiGenderTypeGetAllGenderTypesGet()
      .subscribe((result: any[]) => {
        this.genders = result;
        console.log(this.genders);
      })
  }

  //get all productType
  getProductTypes(): void {
    this._productServices.apiProductTypeGetAllProductTypesGet()
      .subscribe((result: any[]) =>{
        this.products = result;
        console.log(this.products)
      })
  }

  //get product Lists
  getProductListTypes(): void {
    this._productListServices.apiProductListTypeGetAllProductListTypesGet()
      .subscribe((result: any[]) => {
        this.productLists = result;
        console.log(this.productLists )
      })
  }

  //method to get link
  getLinkForGender(id: number):void {
    if (id === 1) {
      this._router.navigate(['contents/mencategories'])
    } else if (id === 2) {
      this._router.navigate(['contents/womencategories'])
    } else if (id === 3) {
      this._router.navigate(['contents/kiddiescategories'])
    }
  }

}

import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import {
  ColorTypeService,
  MemberService,
  GenderTypeService,
  ProductTypeService,
  ProductListTypeService,
  ProductListTypeDto,
  RegisterDto, PostService, PostDto, CommentService, CommentDto
} from '../../shared/client-services';
import { Router } from '@angular/router';
import GenderEnum = RegisterDto.GenderEnum;
import {subscribeToResult} from "rxjs/util/subscribeToResult";

@Component({
    selector: 'app-home',
  templateUrl: './home.component.html',
  encapsulation: ViewEncapsulation.None
})

export class HomeComponent implements OnInit{
  genders: any[];
  products: any[];
  productLists: any[];
  gender =  GenderEnum;
  allPosts: any[] = [];
  comments: any;
  numberOfComments: any;


  constructor(
    private _router: Router,
    private _colorServices: ColorTypeService,
    private _userServices: MemberService,
    private _genderServices: GenderTypeService,
    private _productServices: ProductTypeService,
    private _productListServices: ProductListTypeService,
    private _postServices: PostService,
    private _commentServices: CommentService
  ) { }

  ngOnInit(): void {
    this.getGenderTypes();
    this.getProductTypes();
    this.getProductListTypes();
    this.getAllPosts();
  }

  //get gender type
  getGenderTypes(): void {
    this._genderServices.apiGenderTypeGetAllGenderTypesGet()
      .subscribe((result: any[]) => {
        this.genders = result;
      })
  }

  //get all productType
  getProductTypes(): void {
    this._productServices.apiProductTypeGetAllProductTypesGet()
      .subscribe((result: any[]) =>{
        this.products = result;
      })
  }

  //get product Lists
  getProductListTypes(): void {
    this._productListServices.apiProductListTypeGetAllProductListTypesGet()
      .subscribe((result: any[]) => {
        this.productLists = result.slice(0,3);

      })
  }

  //get all posts
  getAllPosts(): void{
    this._postServices.apiPostGetAllPostsGet()
      .subscribe((result: PostDto[])=> {
        this.allPosts = result;
      })
  }

  //goTo posts
  goToPost(id: number): void{
    this._router.navigate(['contents/post', id])
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

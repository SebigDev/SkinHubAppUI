import {OnInit, Component, ViewEncapsulation, ViewChild, ElementRef} from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import {
  MemberService,
  ProductListTypeService,
  ColorTypeService,
  ProductTypeService,
  ProductListTypeDto,
  PostService,
  PostDto,
  CreatePostDto
} from "../../../../shared/client-services";



@Component({
  selector: 'app-product-category',
  templateUrl: './product-category.component.html',
  encapsulation: ViewEncapsulation.None
})

export class ProductCategoryComponent implements OnInit {
  @ViewChild("postModal") postModal: ElementRef;

  productListID: any;
  productList: any;
  posts: any[];
  post: any;
  postId: number;
  model:any = {};
  createPostDto: CreatePostDto = {};
  postCreated: any;
  showModal = false;

  constructor(
    private _router: Router,
    private _activatedRoute: ActivatedRoute,
    private _userServices: MemberService,
    private _productServices: ProductTypeService,
    private _productListServices: ProductListTypeService,
    private _postServices: PostService

  ) { }

  ngOnInit(): void {
    this.isLoggedIn();
    this._activatedRoute.params.subscribe(params => {
      this.productListID = params.id;
      this.getProductList(this.productListID);
      this.getPostsByProductListID(this.productListID);
    })
  }

  //getProductList
  getProductList(id: number): void {
    this._productListServices.apiProductListTypeGetProductListTypeByIDGet(id)
      .subscribe((result: ProductListTypeDto) => {
        this.productList = result;
      })
  }

  //get post by Product list ID
  getPostsByProductListID(id: number): void {
    this._postServices.apiPostGetPostByProductListTypeIDGet(id)
      .subscribe((result: PostDto[]) => {
        this.posts = result;
      })
  }

  showModalPopUp(): void{
    this.showModal = true;
  }

  //save post
  savePost():void{
    this.createPostDto.title = this.model.title;
    this.createPostDto.body = this.model.body;
    this.createPostDto.productListTypeID = this.productListID;
    this.createPostDto.author = this.username;
    console.log(this.createPostDto);
    this._postServices.apiPostCreatePost(this.createPostDto)
      .subscribe((result: PostDto) =>{
        this.postCreated = result;
        this.close();
        this.getPostsByProductListID(this.productListID);
      })
  }

  // retrieve user from token
  // retrieve user from token
  username = JSON.parse(localStorage.getItem("token")).username;

  isLoggedIn(){
    const token = localStorage.getItem("token");
    return !!token;
  }

  //goTo Post detail
  goToPost(id: number): void{
    this._router.navigate(['/contents/post', id]);
  }

  //goToLogin
  goToLogin(): void{
    this._router.navigate(['/auth/login']);
  }

  close(): void{
    this.postModal.nativeElement.click();
    this.showModal = false;
    this.model = {};
  }

}

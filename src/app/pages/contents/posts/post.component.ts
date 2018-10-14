import {Component, OnInit, ViewEncapsulation} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {
  CommentDto,
  CommentService,
  CreateCommentDto,
  MemberService,
  PostDto,
  PostService
} from "../../../../shared/client-services";


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  encapsulation: ViewEncapsulation.None
})

export class PostComponent implements OnInit {
  postDetail: any;
  postId: any;
  comments: CommentDto[] = [];
  numberOfComments: number;
  picture = false;
  model: any = {};
  newComment: CommentDto = null;
  createCommentDto : CreateCommentDto = {};
  addUp: number;
  addDown: number;

  constructor(
    private _router: Router,
    private _activatedRoute: ActivatedRoute,
    private _userServices: MemberService,
    private _postService: PostService,
    private _commentServices: CommentService
  ) { }

  ngOnInit(): void {
    this.isLoggedIn();
   this._activatedRoute.params.subscribe(params =>{
     this.postId = params.id;

     this.getPostDetail(this.postId);
     this.getCommentsByPostId(this.postId);
   })
  }

  //verifyToken
  isLoggedIn(){
    const token = localStorage.getItem("token");
    return !!token;
  }

  //get post details

  getPostDetail(postId: number): void{
    this._postService.apiPostGetPostByIDGet(postId)
      .subscribe((result: PostDto) =>{
        this.postDetail = result;

      })
  }

  //go to login
  goToLogin(): void{
    this._router.navigate(['auth/login']);
  }

  //getComments
getCommentsByPostId(id: number): void{
    this._commentServices.apiCommentGetCommentByPostIDGet(id)
      .subscribe((result: CommentDto[]) =>{
        this.comments = result;
        if(result){
          this.picture = true;
        }
      })
}

//comment count
  getCommentCount(): number{
    let noOfComment = 0;
    this.numberOfComments = this.comments.length;
    noOfComment += this.numberOfComments;
    return noOfComment;
  }

  //getCommentPicture
  getCommentPicture(data: any): any{
     if(data){
       return `../../assets/images/notification_head2.png`;
     }
     this.picture = false;

  }

  //saveComment
  saveComment(): void{
    this.createCommentDto.author = this.username;
    this.createCommentDto.commentBody = this.model.commentBody;
    this.createCommentDto.postID = this.postId;
    console.log(this.createCommentDto);
    this._commentServices.apiCommentCreatePost(this.createCommentDto)
      .subscribe((result: CommentDto) =>{
        this.newComment = result;
        this.picture = true;
        this.getCommentsByPostId(this.postId);
        this.model = {};
      })
  }

  // retrieve user from token
      username = JSON.parse(localStorage.getItem("token")).username;

  getThumpUp(): number{
    let up = 0;
    this.addUp = 0;
    up += this.addUp;
    return up;
  }

}

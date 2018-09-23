import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../post.service';
import { Post } from '../../common/models/post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  postId: number;
  post: Post;

  constructor(private route: ActivatedRoute, private _postService: PostService ) { 
    this.post = new Post();
  }

  ngOnInit() {
    this.route.paramMap
        .subscribe(params => {
          this.postId = +params.get('id');
        });
    
    this._postService.getPost(this.postId)
        .subscribe(data => {
          this.post = data;
        });    
  }



}

import { Component, OnInit } from '@angular/core';
import { Post } from '../common/models/post';
import { PostService } from './post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts = [];

  constructor(private _postService: PostService) { }

  ngOnInit() {
    this._postService.getAllPosts()
        .subscribe(data => {
          this.posts = data;
        });
  }

}

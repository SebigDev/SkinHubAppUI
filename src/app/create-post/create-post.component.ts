import { Component, OnInit } from '@angular/core';
import { PostService } from '../posts/post.service';
import { Gender } from '../common/models/gender';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  page: number = 1;
  allGenders = [];
  selectedGenderId: number;

  constructor(private _postService: PostService) { }

  ngOnInit() {
    this._postService.getAllGenders()
        .subscribe(data => {
          this.allGenders = data;
        });
  }

  previousPage() {
    return this.page--;
  }

  nextPage() {
    return this.page++;
  }

  getWidth() {
    return ((this.page - 1) * 25) + '%';
  }

  genderSelected(g: Gender) {
    this.selectedGenderId = g.id;
    console.log(this.selectedGenderId);
    
    this.page++;
  }

}

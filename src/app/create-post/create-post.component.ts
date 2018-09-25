import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  page: number = 1;

  constructor() { }

  ngOnInit() {
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

}

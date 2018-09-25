import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  page: number = 1;
  progressBarColor: string = 'white';

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

  getProgressColor() {
    switch (this.page) {
      case 1: 
        this.progressBarColor = 'white';       
        break;
      case 2: 
        this.progressBarColor = 'red';
        break;
      case 3: 
        this.progressBarColor = 'yellow';
        break;
      case 4: 
        this.progressBarColor = 'orange';
        break;
      case 5: 
        this.progressBarColor = 'green';
        break;
      default:
        this.progressBarColor = 'white';
        break;
    }

    return this.progressBarColor;
  }

}

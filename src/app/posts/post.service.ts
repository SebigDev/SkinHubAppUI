import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Post } from '../common/models/post';
import { Gender } from '../common/models/gender';

@Injectable()
export class PostService {

  private allPostApi: string = 'https://localhost:44327/api/post/getallposts';
  private postApi: string = 'https://localhost:44327/api/post/GetPostByID';
  private allGenderApi: string = 'https://localhost:44327/api/gendertype/getallgendertypes';

  constructor(private _http: HttpClient) { }

  getAllPosts(): Observable<Post[]> {
    return this._http.get<Post[]>(this.allPostApi);
  }

  getPost(id: number): Observable<Post> {
    return this._http.get<Post>(this.postApi + '?ID=' + id);
  }

  getAllGenders(): Observable<Gender[]> {
    return this._http.get<Gender[]>(this.allGenderApi);
  }
}
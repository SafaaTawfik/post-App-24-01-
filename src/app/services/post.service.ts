import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '../interfaces/postInterface';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  url = 'https://jsonplaceholder.typicode.com/posts/';
  constructor(private http: HttpClient) { }
  getPosts() {
    return this.http.get<Post[]>(this.url);
  }

  getPostById(id: string) {
    console.log(this.url + id);
    return this.http.get<Post>(this.url + id);

  }

  addPost(post: Post) {
    return this.http.post(this.url, post);
  }

  deletePost(id: any) {
    return this.http.delete(this.url + id);
  }

  updatePost(id: string, post: Post) {
    return this.http.patch(this.url + id, post);
  }
}

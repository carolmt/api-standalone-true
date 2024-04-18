import { HttpClient, HttpHeaderResponse, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Post } from '../Interfaces/Post.interface';

const URL_BASE = 'https://jsonplaceholder.typicode.com/posts';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  private http = inject(HttpClient);
  
  
  constructor() { }

  getPosts() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=UTF-8',
    });
    return this.http.get(URL_BASE, { headers });
  } 

  createPost(post: Post, token: string) {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json; charset=UTF-8',
    });

    return this.http.post(URL_BASE, post);
  }

  updatePost(post: Post) {
    return this.http.put(URL_BASE + '/' + post.userId, post);
  }

  deletePost(id: number) {
    return this.http.delete(URL_BASE + '/' +id);
  }
}

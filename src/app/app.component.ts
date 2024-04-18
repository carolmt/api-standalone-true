import { Component, Inject, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RequestService } from './services/request.service';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  
  title = 'apis';
  URL_BASE ='https://jsonplaceholder.typicode.com/posts';
  private requestService = inject(RequestService);

 
  ngOnInit(): void {
    console.log('Inicio del proyecto');
    // this.getPosts();
    // this.createPost();
    // this.deletePost();
  }

  getPosts() {
    fetch(this.URL_BASE + "/1")
    .then((response) => console.log(response.json))
    .then((json) => console.log(json));
  }

  createPost() {
    fetch(this.URL_BASE, {
      method: 'POST',
      body: JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  }

  deletePost(){
    fetch(this.URL_BASE + "/1", {
    method: 'DELETE',
    });
  }

  getAllPosts() {
    this.requestService.getPosts().subscribe({
      next: (response) => {console.log(response)}
    });
  }

  createPostWithAngular(){
    let post = {
      title: 'foo',
      body: 'bar',
      userId: 1,
    };

    //TODO: GET TOKEN SESSION
    let token = 'aqui deberia ir el token';

    this.requestService.createPost(post, token).subscribe({
      next: (response) => { console.log(response)},
      error: (error) => { console.log(error)}
    });
  }

  updatePostWithAngular() {
    let post = {
      userId: 1,
      id: 10,
      title: 'Ejemplo de post',
      body: 'aqui va el texto del post',
      message: 'Post creado como ejemplo;'
    };
    this.requestService.updatePost(post).subscribe({
      next: (response) => {console.log(response)},
      error: (error) => {console.log(error)}
    });
  }

  deletePostWithAngular() {
    let post = {
      userId: 1,
      id: 10,
      title: 'Ejemplo de post',
      body: 'aqui va el texto del post',
      message: 'Post creado como ejemplo;'
    };
    this.requestService.deletePost(post.id).subscribe({
      next: (response) => console.log(response),
      error: (error) => console.log(error)
  
    });
  }
}

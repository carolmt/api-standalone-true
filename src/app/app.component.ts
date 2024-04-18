import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

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

}

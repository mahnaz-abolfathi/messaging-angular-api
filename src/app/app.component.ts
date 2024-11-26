import { Component } from '@angular/core';
import {LoginService} from "./services/login.service";
import {PostService} from "./services/post.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Message API';


  constructor(private loginService: LoginService, private postService: PostService) {
    // this.loginService.login();
    this.postService.getPosts();
  }
}

import { Component, Output, EventEmitter } from '@angular/core';
import {Post} from '../../Post';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';
import { LoginService } from "../../services/login.service";


@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent {
  @Output() onAddPost: EventEmitter<Post> = new EventEmitter();

  id: string= "";
  subject!: string;
  body!: string;
  showAddTask!: boolean;
  subscription: Subscription;

  constructor(private uiService: UiService, private loginService: LoginService){
    this.subscription = this.uiService.onToggle().subscribe(
      (value) => (this.showAddTask = value)
    );
  }

  onSubmit(){
    const newPost = {
      id: this.id,
      author: this.loginService.getCurrentUser(),
      subject: this.subject,
      body: this.body,
    }

    console.log(newPost)
    this.onAddPost.emit(newPost);
    this.subject = '';
    this.body = '';
  }


}

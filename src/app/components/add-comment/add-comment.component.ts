import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Comment} from "../../Comment";

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.css']
})

export class AddCommentComponent {
  @Output() onAddComment: EventEmitter<Comment> = new EventEmitter();

  @Input() postId: string = "";
  @Input() author: string = "";
  body!: string;

  showAddComment: boolean = true;


  constructor() {
  }

  onSubmit() {

    if (!this.body) {
      alert('Please add body!');
    }

    const newComment = {
      // id: '',
      postId: this.postId,
      author: this.author,
      body: this.body,
    }

    this.onAddComment.emit(newComment);

    this.postId = '';
    this.author = '';
    this.body = '';
  }

}

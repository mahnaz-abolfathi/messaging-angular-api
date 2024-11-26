import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Post } from '../../Post';
import {CommentService} from "../../services/comment.service";
import {Comment} from "../../Comment";


@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.css']
})
export class PostItemComponent implements OnInit {
  @Input() post!: Post;
  @Output() onAddComment: EventEmitter<string> = new EventEmitter();
  @Output() onDeleteTask: EventEmitter<Post> = new EventEmitter();
  @Input() comments: Comment[] = [];
  @Output() onToggleReminder: EventEmitter<Post> = new EventEmitter();

  isShowComment = true;

  constructor(private commentService: CommentService) {
  }

  ngOnInit(): void {
  }

  toggleDisplayDiv() {
    this.isShowComment = !this.isShowComment;
  }

  addComment(comment: Comment) {
    this.commentService.addComment(comment).subscribe(
      (comment) => {
        this.comments.push(comment);
        this.isShowComment = true;
        this.onAddComment.emit("commentAdded");
      }

    );
  }
}

import {Component, OnInit} from '@angular/core';
import {PostService} from 'src/app/services/post.service';
import {Post} from '../../Post';

@Component({
  selector: 'app-posts',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  posts!: Array<Post>;

  constructor(private postService: PostService) {

  }

  ngOnInit(): void {
    this.postService.getPosts().subscribe(
      (postItems) => {
        // @ts-ignore
        this.posts = postItems.posts;
      });
  }

  deletePost(post: Post) {

    this.postService.deletePost(post)
      .subscribe(
        () => this.posts =
          // @ts-ignore
          this.posts.filter((t) => t.id !== post.id));
  }

  toggleReminder(task: Post) {
  }

  addPost(newPost: Post) {
    this.postService.addPost(newPost).subscribe(
      // @ts-ignore
      (post) => {
        this.posts.push(post);
        this.posts.reverse();
      }
    );
  }

  refreshUi() {
    this.ngOnInit();
  }
}

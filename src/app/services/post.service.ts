import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import {Observable} from 'rxjs';
import {Post} from '../Post';
import {PostItems} from "../PostItems";
import {API_URL} from "./API_URL";


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class PostService {

  //backend posts API url
  // private postsUrl = 'http://localhost:8080/_ah/api/posts/v1';

  constructor(private http: HttpClient) {
  }

  getPosts(): Observable<PostItems> {
    return this.http.get<PostItems>(`${API_URL.POSTS_URL}/posts`);
  }

  deletePost(post: Post): Observable<Post> {
    const url = `${API_URL.POSTS_URL}/${post.id}`;
    return this.http.delete<Post>(url);
  }

  // @ts-ignore
  addPost(post: Post): Observable<Post> {
    const url = `${API_URL.POSTS_URL}/create`;
    return this.http.post<Post>(url, post, httpOptions);
  }

  private doUpdatePost(post: Post) {
    //example url:
    //http://localhost:8080/_ah/api/posts/v1/modify?key=4fe9778e-6c5e-426b-9528-5cd288faea37
    const url = `${API_URL.POSTS_URL}/modify?key=${post.id}`;
    return this.http.put<Post>(url, post, httpOptions);
  }
}

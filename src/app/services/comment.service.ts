import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Comment} from "../Comment";
import {API_URL} from "./API_URL";


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  //backend comments API url
  // private commentsUrl = 'http://localhost:8080/_ah/api/comments/v1';

  constructor(private http: HttpClient) {
  }

  addComment(comment: Comment): Observable<Comment> {
    const url = `${API_URL.COMMENTS_URL}/create`;
    return this.http.post<Comment>(url, comment, httpOptions);
  }
}

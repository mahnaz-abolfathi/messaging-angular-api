import {Comment} from "./Comment";

export interface Post {
  id: string;
  author: string;
  subject: string;
  body: string;
  comments?: Array<Comment>
}

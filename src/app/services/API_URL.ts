 export abstract class API_URL {

   //LOCAL Host
   // static HOST = 'http://localhost:8080';

   //GCP Remote Host   e.g. https://project-2-id2-399020.ew.r.appspot.com/_ah/api/comments/v1
  static HOST = 'https://project-2-id2-399020.appspot.com';



   //Posts BackendAPI Url  e.g.  http://localhost:8080/userapi
   static LOGIN_URL = `${this.HOST}/userapi`;

  //Posts BackendAPI Url  e.g.  http://localhost:8080/_ah/api/posts/v1
  static POSTS_URL = `${this.HOST}/_ah/api/posts/v1`;

   // Comments BackendAPI Url  e.g. http://localhost:8080/_ah/api/comments/v1
  static COMMENTS_URL = `${this.HOST}/_ah/api/comments/v1`;

}


 // https://project-2-id2-399020.appspot.com/_ah/api/posts/v1/posts
 // https://project-2-id2-399020.ew.r.appspot.coms/_ah/api/posts/v1/posts

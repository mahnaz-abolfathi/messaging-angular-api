import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {LoginResponse} from "../LoginResponse";
import {API_URL} from "./API_URL";


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private loginResponse?: LoginResponse;

  private httpHeaders = new HttpHeaders()
    .set("content-type", "application/json");

  constructor(private http: HttpClient) {
  }


  login(): void {

    this.http.get<LoginResponse>(API_URL.LOGIN_URL, {'headers': this.httpHeaders}).subscribe(
      (value) => (
        this.loginResponse = value
      )
    );

  }

  getCurrentUser(): any {
    return this.loginResponse?.userName;
  }

}

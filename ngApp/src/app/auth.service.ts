import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable()
export class AuthService {

  private _registerUrl = "/api/register";
  private _loginUrl = "/api/login";

  constructor(private http: HttpClient) { }

  registerUser(user) {
    return this.http.post(this._registerUrl, user, {responseType: 'text'})
  }

  loginUser(user) {
    return this.http.post(this._loginUrl, user, {responseType: 'text'})
  }
}

import { Injectable, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class AuthService {

  currentUser: any;
  temporaryUser: any;

  constructor(private http: Http) { }

  handleError(e) {
    return Observable.throw(e.json().message);
  }

  signup(user) {
    return this.http.post(environment.base_URL + `/api/signup`, user, {withCredentials: true})
      .map(res => res.json(), this.currentUser = user)
      .catch(this.handleError);
  }

  login(user) {
    return this.http.post(environment.base_URL + `/api/login`, user, {withCredentials: true})
      .map(res => res.json(), this.currentUser = user)
      .catch(this.handleError);
  }

  logout() {
    return this.http.delete(environment.base_URL + `/api/logout`, {withCredentials: true})
      .map(res => { res.json(); })
      .catch(this.handleError);
  }

  isLoggedIn() {
    return this.http.get(environment.base_URL + `/api/loggedin`, {withCredentials: true})
      .map(res => { this.currentUser = res.json(); })
      .catch(this.handleError);
  }

  getUserInfo() {
    return this.http.get(environment.base_URL + '/api/userinfo', {withCredentials: true})
    .map((responseFromApi) => responseFromApi.json());
  }

  updateUserInfo(body) {
    return this.http.post(environment.base_URL + '/api/updateuser', body, {withCredentials: true})
    .map((responseFromApi) => responseFromApi.json());
  }
}

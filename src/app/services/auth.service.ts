import { Injectable } from '@angular/core';
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

  // getUsername(username) {
  //   return this.http.get(`http://localhost:3000/api/quicky/${username}`, {withCredentials: true})
  //   .map((responseFromApi) => this.currentUser = responseFromApi.json());
  // }

  handleError(e) {
    return Observable.throw(e.json().message);
  }

  signup(user) {
    return this.http.post(`http://localhost:3000/api/signup`, user, {withCredentials: true})
      .map(res => res.json(), this.currentUser = user)
      .catch(this.handleError);
  }

  login(user) {
    return this.http.post(`http://localhost:3000/api/login`, user, {withCredentials: true})
      .map(res => res.json(), this.currentUser = user)
      .catch(this.handleError);
  }

  logout() {
    return this.http.delete(`http://localhost:3000/api/logout`, {withCredentials: true})
      .map(res => { res.json(); })
      .catch(this.handleError);
  }

  isLoggedIn() {
    return this.http.get(`http://localhost:3000/api/loggedin`, {withCredentials: true})
      .map(res => { this.currentUser = res.json(); })
      .catch(this.handleError);
  }

  getUserInfo() {
    return this.http.get('http://localhost:3000/api/userinfo', {withCredentials: true})
    .map((responseFromApi) => responseFromApi.json());
  }

  updateUserInfo(body) {
    return this.http.post('http://localhost:3000/api/updateuser', body, {withCredentials: true})
    .map((responseFromApi) => responseFromApi.json());
  }

  // updateUser(userId, updatedUser) {
  //   return this.http.get(`http:localhost:3000/api/user/update/${userId}`, updatedUser)
  //   .map((response) => { this.currentUser = response; } );
  // }

  // getPrivateData() {
  //   return this.http.get(`http://localhost:3000/api/private`, {withCredentials: true})
  //     .map(res => res.json())
  //     .catch(this.handleError);
  // }
}

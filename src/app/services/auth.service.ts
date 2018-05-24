import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class AuthService {

  currentUser: any;

  constructor(private http: Http) { }

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
    return this.http.post(`http://localhost:3000/api/logout`, {withCredentials: true})
      .map(res => res.json())
      .catch(this.handleError);
  }

  isLoggedIn() {
    return this.http.get(`http://localhost:3000/api/loggedin`, {withCredentials: true})
      .map(userFromBackend => {
        this.currentUser = userFromBackend;
        // console.log('USER IN THE SERVICE:',userFromBackend);
        userFromBackend.json();
      })
      .catch(this.handleError);
  }

  // isLoggedIn() {
  //   return this.http.get(`http://localhost:3000/api/loggedin`, {withCredentials: true})
  //   .toPromise()
  //   .then((apiResult) => {
  //     console.log(apiResult);
  //     // this.currentUser = apiResult.userInfo;
  //     return apiResult;
  //   });
  // }
  getPrivateData() {
    return this.http.get(`http://localhost:3000/api/private`, {withCredentials: true})
      .map(res => res.json())
      .catch(this.handleError);
  }
}

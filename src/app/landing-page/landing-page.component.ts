import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent {

  constructor(private myService: AuthService) {}

  formInfo: any = {username: '', password: ''};
  user: any;
  error: any;

  login() {
    this.myService.login(this.formInfo)
    .subscribe(
      (user) => this.user = user,
      (err) => this.error = err
    );
  }

  signup() {
    this.myService.signup(this.formInfo)
      .subscribe(
        (user) => {this.user = user;
          console.log('user:', this.user);
        },
        (err) => this.error = err
      );
  }

  logout() {
    this.myService.logout()
    .subscribe(
    () => {this.user = null;
      this.formInfo = {};
    },
    (err) => this.error = err
   );
  }



}

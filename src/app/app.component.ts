import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(
    private myService: AuthService,
    public userThang: AuthService
  ) {}


  formInfo: any = {username: '', password: ''};
  user: any;
  error: any;

  ngOnInit() {
    this.userThang.isLoggedIn()
    .catch((err): any => {
      alert('something went horribly wrong!!');
    });
  }

  login() {
    this.userThang.login(this.formInfo)
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

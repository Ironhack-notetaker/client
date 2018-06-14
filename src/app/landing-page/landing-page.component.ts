import {
  Component,
  OnInit
} from '@angular/core';
import {
  Observable
} from 'rxjs/Observable';
import {
  AuthService
} from '../services/auth.service';
import {
  Router
} from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent {

  constructor(private myService: AuthService,
  private router: Router) {}

  formInfo: any = {
    username: '',
    password: ''
  };
  user: any = this.myService.currentUser;
  error: any;

  login() {
    this.myService.login(this.formInfo)
      .subscribe(
        (user) => {
          this.user = user;
          this.formInfo = {};
          this.router.navigate(['/welcome']);
        },
        (err) => this.error = err
      );
  }

  signup() {
    this.myService.signup(this.formInfo)
      .subscribe(
        (user) => {
          this.user = user;
          this.formInfo = {};
          this.router.navigate(['/user']);
        },
        (err) => this.error = err
      );
  }

  logout() {
    this.myService.logout()
      .subscribe(
        (res) => {
          this.formInfo = {};
          this.user = null;
          this.myService.currentUser = null;
          this.router.navigate(['/welcome']);
        },
        (err) => this.error = err
      );
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {
    this.myService.isLoggedIn()
      .toPromise()
      .then(() => {
        this.user = this.myService.currentUser;
        if (this.user.userInfo === null) {
          this.router.navigate(['/welcome']);
        }
      })
      .catch(err => {
        console.log('err in notes: ', err);
        this.router.navigate(['/welcome']);
      });
  }

}

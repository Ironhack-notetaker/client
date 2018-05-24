import {
  Component,
  OnInit
} from '@angular/core';
import {
  Observable
} from 'rxjs/Observable';
import {
  AuthService
} from './services/auth.service';
import {
  Router
} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  formInfo: any = {
    username: '',
    password: ''
  };
  user: any;
  error: any;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.authService.isLoggedIn()
      .toPromise()
      .then(() => {
        this.user = this.authService.currentUser;
        if (this.user === null) {
          this.router.navigate(['/welcome']);
        }
      })
      .catch(err => {
        console.log('err in notes: ', err);
        this.router.navigate(['/welcome']);
      });
  }

  login() {
    this.authService.login(this.formInfo)
      .subscribe(
        (user) => this.user = user,
        (err) => this.error = err
      );
  }

  signup() {
    this.authService.signup(this.formInfo)
      .subscribe(
        (user) => {
          this.user = user;
          console.log('user:', this.user);
        },
        (err) => this.error = err
      );
  }

  logout() {
    this.authService.logout()
      .subscribe(
        () => {
          this.user = null;
          this.authService.currentUser = this.user;
          this.formInfo = {};
        },
        (err) => this.error = err
      );
  }


}

import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { NoteService } from './services/note.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private myService: NoteService) {}

  formInfo: any = {username: "", password: ""};

  user: any;
  error: any;
  title = 'Note Taker';

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
      (user) => {
        this.user = user;
      },
      (err) => this.error = err
    );  
  }

  logout() {
    this.myService.logout()
    .subscribe(
      (user) => {
        this.user = null
        this.formInfo = {};
      },
      (err) => this.error = err
    );  
  }

}
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { NoteService } from '../services/note.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  formInfo: any = {bio: ''};
  user: any;
  error: string;
  userFavorites: any = [];

  constructor( private authService: AuthService,
    private noteService: NoteService,
    private router: Router ) { }

  ngOnInit() {
    this.authService.isLoggedIn()
      .toPromise()
      .then(() => {
        this.user = this.authService.currentUser;
        if (this.user.userInfo === null) {
          this.router.navigate(['/welcome']);
        }
      })
      .catch(err => {
        console.log('err in notes: ', err);
        this.router.navigate(['/welcome']);
      });

    this.authService.getUserInfo()
    .subscribe((user) => {
      this.user = user;
      console.log('user from user profile page', this.user);
    });

    this.noteService.getFavorites()
    .subscribe((favorites) => {
      this.userFavorites = favorites;
    });
  }

  updateUserInfo() {
    this.authService.updateUserInfo(this.formInfo)
    .subscribe(() => {
      this.formInfo = {};
    });
  }



}

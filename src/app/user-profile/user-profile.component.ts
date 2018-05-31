import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { NoteService } from '../services/note.service';
import { TeamService } from '../services/team.service';

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
  userNotes: any = [];
  userTeams: any = [];

  constructor( private authService: AuthService,
    private noteService: NoteService,
    private teamService: TeamService,
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

    this.getUserNotes();
    this.getAllTheTeams();
  }

  updateUserInfo() {
    this.authService.updateUserInfo(this.formInfo)
      .subscribe(() => {
        this.formInfo = {};
      });
  }

  getUserNotes() {
    this.noteService.getAllNotes()
      .subscribe((response) => {
        this.userNotes = response;
      });
  }

  getAllTheTeams() {
    this.teamService.getAllTeams()
      .subscribe((teamList) => {
        this.userTeams = teamList;
      });
  }

  removeFavorite(theId, noteId): void {
    this.noteService.removeFavorite(theId, noteId)
      .subscribe(() => {
      });
      this.refresh();
  }

  refresh(): void {
    window.location.reload();
  }

}

import { Component, OnInit } from '@angular/core';
import { NoteService } from '../services/note.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-note-item',
  templateUrl: './note-item.component.html',
  styleUrls: ['./note-item.component.css']
})
export class NoteItemComponent implements OnInit {

  user: any = this.authService.currentUser;
  theNote: any = {};
  theUpdate: any = {};

  constructor(private myService: NoteService,
  private authService: AuthService,
  private route: ActivatedRoute,
  private router: Router) { }

  getOneNote(theId) {
    this.myService.getOneNote(theId)
    .subscribe((response) => {
      this.theNote = response;
    });
  }

  updateNote(theId) {
    this.myService.updateNote(theId, this.theUpdate)
    .subscribe(() => {
      this.getOneNote(theId);
      this.theUpdate = {};
    });
  }

  ngOnInit() {
    this.authService.isLoggedIn()
      .toPromise()
      .then(() => {
        this.user = this.authService.currentUser;
        console.log('this.user: ', this.user);
        if (this.user.userInfo === null) {
          this.router.navigate(['/welcome']);
        }
      })
      .catch(err => {
        console.log('err in notes: ', err);
        this.router.navigate(['/welcome']);
      });

    this.route.params.subscribe((params) => {
        const theId = (params['id']);
        this.myService.getOneNote(theId)
        .subscribe((responseFromService) => {
          this.theNote = responseFromService;
        });
    });

  }
}

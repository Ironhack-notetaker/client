import {
  Component,
  OnInit,
  AfterViewInit
} from '@angular/core';
import {
  NoteService
} from '../services/note.service';
import {
  ActivatedRoute,
  Router
} from '@angular/router';
import {
  AuthService
} from '../services/auth.service';

@Component({
  selector: 'app-note-item',
  templateUrl: './note-item.component.html',
  styleUrls: ['./note-item.component.css']
})
export class NoteItemComponent implements OnInit {

  user: any = this.authService.currentUser;
  theNote: any = {};
  theUpdate: any = {};
  allTheNotes: Array<any> = [];
  body: any = {username: ''};
  wasClicked: Boolean = false;

  constructor(private myService: NoteService,
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router) {}

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

    this.route.params.subscribe((params) => {
      const theId = (params['id']);
      this.myService.getOneNote(theId)
        .subscribe((responseFromService) => {
          this.theNote = responseFromService;
        });
    });
  }


  getOneNote(theId) {
    this.myService.getOneNote(theId)
      .subscribe((response) => {
        this.theNote = response;
      });
  }

  removeMyNotes(theId, noteId) {
    this.myService.removeFavorite(theId, noteId)
    .subscribe(() => {
      this.getAllTheNotes();
    });
    this.wasClicked = true;
  }

  favoriteNote(theId, noteId) {
    this.myService.favoriteNote(theId, noteId)
      .subscribe(() => {
        this.getAllTheNotes();
      });
  }

  updateNote(theId) {
    this.myService.updateNote(theId, this.theUpdate)
      .subscribe(() => {
        this.getOneNote(theId);
        this.theUpdate = {};
      });
    this.refresh();
  }

  getAllTheNotes() {
    this.myService.getAllNotes()
      .subscribe((theList) => {
        this.allTheNotes = theList;
      });
    this.myService.getFavorites();
  }

  deleteNote(theId) {
    this.myService.deleteNote(theId)
    .subscribe(() => {
      this.getAllTheNotes();
    });
  }

  addUser(noteId) {
    this.myService.addUserToNote(noteId, this.body)
      .subscribe(() => {
        this.getAllTheNotes();
      });
    // this.refresh();
  }

  refresh(): void {
    window.location.reload();
  }
}

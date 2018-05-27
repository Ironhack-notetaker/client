import {
  Component,
  OnInit
} from '@angular/core';
import {
  NoteService
} from '../services/note.service';
import {
  AuthService
} from '../services/auth.service';
import {
  ActivatedRoute
} from '@angular/router';
import {
  Router
} from '@angular/router';


@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.css']
})
export class NotesListComponent implements OnInit {

  user: any;

  allTheNotes: Array < any > = [];

  isShowing: Boolean = false;

  // Add user to newNote.user
  newNote: any = {
    user: '',
    title: '',
    text: '',
    status: '',
    urgency: '',
    category: '',
    date: Date.now(),
    theme: '',
    format: ''
  };

  constructor(private noteService: NoteService,
    private authService: AuthService,
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

      this.getAllTheNotes();

    }

  logout() {
    this.authService.logout();
  }

  toggleForm() {
    this.isShowing = !this.isShowing;
  }

  getAllTheNotes() {
    this.noteService.getAllNotes()
      .subscribe((theList) => {
        this.allTheNotes = theList;
      });
  }

  deleteNote(theId) {
    this.noteService.deleteNote(theId)
      .subscribe(() => {
        this.getAllTheNotes();
      });
  }

  addNewNote() {
    this.noteService.createNote(this.newNote)
      .subscribe(() => {
        this.getAllTheNotes();
      });
  }



}

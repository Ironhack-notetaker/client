import { Component, OnInit } from '@angular/core';
import { NoteService } from '../services/note.service';
import { AuthService } from '../services/auth.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
// import { userInfo } from 'os';


@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.css']
})
export class NotesListComponent implements OnInit {

  allTheNotes: Array<any> = [];

  isShowing: Boolean = false;

  // Add user to newNote.user
  newNote: any = {user: '', title : '', text: '', status: '',
    urgency: '', category: '', date: Date.now(), theme: '', format: ''};

  constructor(private noteService: NoteService,
  private authService: AuthService,
  private router: Router) { }

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

  ngOnInit() {
   this.getAllTheNotes();
  }

}

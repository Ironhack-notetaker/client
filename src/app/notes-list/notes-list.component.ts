import { Component, OnInit } from '@angular/core';
import { NoteService } from '../services/note.service';
import { AuthService } from '../services/auth.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.css']
})
export class NotesListComponent implements OnInit {

  allTheNotes: Array<any> = [];

  constructor(private noteService: NoteService,
  private authService: AuthService) { }

  ngOnInit() {
    this.noteService.getAllNotes()
    .subscribe((theList) => {
      this.allTheNotes = theList;
    });

  }

}

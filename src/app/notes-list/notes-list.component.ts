import { Component, OnInit } from '@angular/core';
import { NoteService } from '../services/note.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.css']
})
export class NotesListComponent implements OnInit {

  allTheNotes: Array<any> = [];

  constructor(private myService: NoteService) { }

  ngOnInit() {
    this.myService.getAllNotes()
    .subscribe((theList) => {
      this.allTheNotes = theList;
    });
  }

}

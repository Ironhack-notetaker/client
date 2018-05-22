import { Component, OnInit } from '@angular/core';
import { NoteService } from '../services/note.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-team-note-item',
  templateUrl: './team-note-item.component.html',
  styleUrls: ['./team-note-item.component.css']
})
export class TeamNoteItemComponent implements OnInit {


  constructor(
  private route: ActivatedRoute) { }

  ngOnInit() {

  }

}

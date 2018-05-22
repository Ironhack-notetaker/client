import { Component, OnInit } from '@angular/core';
import { NoteService } from '../services/note.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-note-item',
  templateUrl: './note-item.component.html',
  styleUrls: ['./note-item.component.css']
})
export class NoteItemComponent implements OnInit {

  theNote: any = {};

  constructor(private myService: NoteService,
  private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const theId = (params['id']);
      this.myService.getOneNote(theId)
      .subscribe((responseFromService) => {
        this.theNote = responseFromService;
      });
    });
  }

}

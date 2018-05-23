import { Component, OnInit } from '@angular/core';
import { TeamService } from '../services/team.service';
import { NoteService } from '../services/note.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-team-notes-list',
  templateUrl: './team-notes-list.component.html',
  styleUrls: ['./team-notes-list.component.css']
})
export class TeamNotesListComponent implements OnInit {

  isShowing: Boolean = false;

  allTheNotes: Array<any> = [];

  theTeam: any = {user: '', note: [], teamName: '',
  urgency: '', status: '', theme: ['']};

  theUpdate: any = {};

  newNote: any = {user: '', title : '', text: '', status: '',
    urgency: '', category: '', date: Date.now(), theme: '', format: ''};

  constructor(private myService: TeamService,
  private noteService: NoteService,
  private route: ActivatedRoute) { }

  toggleForm() {
    this.isShowing = !this.isShowing;
  }

  getOneTeam(theId) {
    this.myService.getOneTeam(theId)
    .subscribe((response) => {
      this.theTeam = response;
    });
  }

  addNewNote() {
    this.noteService.createNote(this.newNote)
    .subscribe(() => {
      this.myService.getOneTeam(this.theTeam._id)
      .subscribe((thisUpdatedTeam) => {
        thisUpdatedTeam.note.push(this.newNote);
        console.log(thisUpdatedTeam);
// not saving note to team
      });
    });
    this.toggleForm();
  }

  updateTeam(theId) {
    this.myService.updateTeam(theId, this.theUpdate)
    .subscribe(() => {
      this.getOneTeam(theId);
      this.theUpdate = {};
    });
  }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const theId = (params['id']);
      this.myService.getOneTeam(theId)
      .subscribe((responseFromService) => {
        this.theTeam = responseFromService;
      });
    });
  }

}

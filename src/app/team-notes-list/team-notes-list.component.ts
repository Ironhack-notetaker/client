import {
  Component,
  OnInit
} from '@angular/core';
import {
  TeamService
} from '../services/team.service';
import {
  NoteService
} from '../services/note.service';
import {
  AuthService
} from '../services/auth.service';
import {
  ActivatedRoute
} from '@angular/router';

@Component({
  selector: 'app-team-notes-list',
  templateUrl: './team-notes-list.component.html',
  styleUrls: ['./team-notes-list.component.css']
})
export class TeamNotesListComponent implements OnInit {

  user: any = this.authService.currentUser;

  isShowing: Boolean = false;

  allTheNotes: Array < any > = [];

  theTeam: any = {
    user: [this.authService.currentUser.username],
    note: [''],
    teamName: '',
    urgency: '',
    status: '',
    theme: ['']
  };

  theUpdate: any = {};

  newNote: any = {
    user: this.authService.currentUser.username,
    title: '',
    text: '',
    status: '',
    urgency: '',
    category: '',
    date: Date.now(),
    theme: '',
    format: ''
  };

  constructor(private myService: TeamService,
    private noteService: NoteService,
    private authService: AuthService,
    private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const theId = (params['id']);
      this.myService.getOneTeam(theId)
        .subscribe((responseFromService) => {
          this.theTeam = responseFromService;
        });
    });
  }

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
    const newOneNote = {
      user: this.newNote.user,
      title: this.newNote.title,
      text: this.newNote.text,
      status: this.newNote.status,
      urgency: this.newNote.urgency,
      category: this.newNote.category,
      date: Date.now(),
      theme: this.newNote.theme,
      format: this.newNote.format
    };

    this.noteService.createNote(this.newNote)
      .subscribe(() => {
        this.myService.getOneTeam(this.theTeam._id)
          .subscribe((thisUpdatedTeam) => {
            thisUpdatedTeam.note.push(newOneNote);
            this.updateThisTeam(this.theTeam._id);
            console.log(thisUpdatedTeam);
          });
      });
    this.toggleForm();
    return newOneNote;
  }

  updateThisTeam(theId) {
    this.myService.updateTeam(theId, this.theUpdate)
      .subscribe(() => {
        this.getOneTeam(theId);
        this.theUpdate = {};
      });
  }

  updateTeamsNotes(theTeamId) {
    this.myService.updateTeamNotes(theTeamId, this.addNewNote())
    .subscribe(() => {
      this.getOneTeam(theTeamId);
      this.newNote.title = '';
    });
  }

}

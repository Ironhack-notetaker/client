import { Component, OnInit } from '@angular/core';
import { TeamService } from '../services/team.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-teams-list',
  templateUrl: './teams-list.component.html',
  styleUrls: ['./teams-list.component.css']
})
export class TeamsListComponent implements OnInit {

  allTheTeams: Array<any> = [];

  isShowing: Boolean = false;

  newTeam: any = {user: '', note: [], teamName: '',
   urgency: '', status: '', theme: ['']};

  constructor(private myService: TeamService,
  private router: Router) { }

  toggleForm() {
    this.isShowing = !this.isShowing;
  }

  getAllTheTeams() {
    this.myService.getAllTeams()
    .subscribe((teamList) => {
      this.allTheTeams = teamList;
    });
  }

  deleteTeam(theId) {
    this.myService.deleteTeam(theId)
    .subscribe(() => {
      this.getAllTheTeams();
    });
  }

  addNewTeam() {
    this.myService.createTeam(this.newTeam)
    .subscribe(() => {
      this.getAllTheTeams();
    });
  }

  ngOnInit() {
    this.getAllTheTeams();
  }

}

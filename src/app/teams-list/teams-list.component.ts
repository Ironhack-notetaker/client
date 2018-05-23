import { Component, OnInit } from '@angular/core';
import { TeamService } from '../services/team.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-teams-list',
  templateUrl: './teams-list.component.html',
  styleUrls: ['./teams-list.component.css']
})
export class TeamsListComponent implements OnInit {

  allTheTeams: Array<any> = [];

  constructor(private myService: TeamService) { }

  ngOnInit() {
    this.myService.getAllTeams()
    .subscribe((teams) => {
      this.allTheTeams = teams;
    });
  }

}

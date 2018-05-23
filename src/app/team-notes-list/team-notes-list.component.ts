import { Component, OnInit } from '@angular/core';
import { TeamService } from '../services/team.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-team-notes-list',
  templateUrl: './team-notes-list.component.html',
  styleUrls: ['./team-notes-list.component.css']
})
export class TeamNotesListComponent implements OnInit {

  theTeam: any = {};

  constructor(private myService: TeamService,
  private route: ActivatedRoute) { }

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

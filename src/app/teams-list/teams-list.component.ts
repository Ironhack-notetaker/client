import { Component, OnInit } from '@angular/core';
import { TeamService } from '../services/team.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-teams-list',
  templateUrl: './teams-list.component.html',
  styleUrls: ['./teams-list.component.css']
})
export class TeamsListComponent implements OnInit {
  user: any;
  message: any;
  isUser: Boolean = true;
  allTheTeams: Array<any> = [];

  isShowing: Boolean = false;

  newTeam: any = {user: '', note: [], teamName: '',
   urgency: '', status: '', theme: ['']};

  constructor(private myService: TeamService,
              private router: Router,
              private myAuth: AuthService) { }


  ngOnInit() {
    this.myAuth.isLoggedIn()
    .toPromise()
    .then( () => {
      this.user = JSON.parse(this.myAuth.currentUser._body);
      // this.message = JSON.parse(this.myAuth.currentUser._body);
      // if(JSON.stringify(this.user) === JSON.stringify(this.message)){
      //   this.isUser = false;
      // }
      // console.log('isuser: ', this.isUser)
      // console.log('what is this???? ', this.message)
    } )
    .catch( err => {
      console.log('error in the ngOnInit in teams lis: ', err);
      this.router.navigate(['/welcome']);
    });

    this.getAllTheTeams();
  }

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


}

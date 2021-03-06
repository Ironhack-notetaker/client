import {
  Component,
  OnInit
} from '@angular/core';
import {
  TeamService
} from '../services/team.service';
import {
  ActivatedRoute
} from '@angular/router';
import {
  Router
} from '@angular/router';
import {
  AuthService
} from '../services/auth.service';
import {
  PaginationInstance
} from 'ngx-pagination';

@Component({
  selector: 'app-teams-list',
  templateUrl: './teams-list.component.html',
  styleUrls: ['./teams-list.component.css']
})
export class TeamsListComponent implements OnInit {

  user: any = this.authService.currentUser;
  message: any;
  allTheTeams: Array < any > = [];

  isShowing: Boolean = false;

  newTeam: any = {
    user: '',
    note: [],
    teamName: '',
    urgency: '',
    status: '',
    theme: ['']
  };

  public config: PaginationInstance = {
    id: 'custom',
    itemsPerPage: 10,
    currentPage: 1
  };

  constructor(private myService: TeamService,
    private authService: AuthService,
    private router: Router) {}

  ngOnInit() {
    this.authService.isLoggedIn()
      .toPromise()
      .then(() => {
        this.user = this.authService.currentUser;
        if (this.user.userInfo === null) {
          this.router.navigate(['/welcome']);
        }
      })
      .catch(err => {
        console.log('err in teams: ', err);
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
      .subscribe((team) => {
        team.user.unshift(this.user.username);
        this.getAllTheTeams();
      });
  }

}

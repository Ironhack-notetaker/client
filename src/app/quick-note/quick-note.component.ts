import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/quicky.service';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Http, Response } from '@angular/http';


@Component({
  selector: 'app-quick-note',
  templateUrl: './quick-note.component.html',
  styleUrls: ['./quick-note.component.css']
})
export class QuickNoteComponent implements OnInit {

  user: any;

  constructor( private myService: DataService,
  private authService: AuthService,
  private route: ActivatedRoute,
  private http: Http) { }

  saveQuickNote() {
    if (this.myService.hasData()) {
      const data = this.myService.getData();
    } else {
      this.myService.getData().subscribe(res => {
        this.myService.setData(res.data);
      }, error => {
        console.log(error);
      });
    }
  }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const theUsername = (params['username']);
      this.authService.getUsername(theUsername)
      .subscribe((responseFromService) => {
        this.user.userInfo.username = responseFromService;
        console.log(responseFromService);
      });
    });


    this.saveQuickNote();
  }

  // getThisUsername(theUsername) {
  //   this.myService.getUsername(theUsername)
  //   .subscribe((response) => {
  //     this.user = response;
  //   });
  // }

}

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

  ngOnInit() {
    this.saveQuickNote();
  }

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
}

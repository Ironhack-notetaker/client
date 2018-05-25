import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/quicky.service';

@Component({
  selector: 'app-quick-note',
  templateUrl: './quick-note.component.html',
  styleUrls: ['./quick-note.component.css']
})
export class QuickNoteComponent implements OnInit {

  constructor( private myService: DataService) { }

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

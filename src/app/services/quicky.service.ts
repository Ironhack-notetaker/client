import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { AuthService } from './auth.service';

@Injectable()
export class DataService {

  private data: Storage;

  constructor(private http: Http,
  private authService: AuthService) {}

  setData(data: Storage) {
    this.data = data;
  }

  getData() {
    document.getElementById('heading').innerHTML = localStorage['title'] || 'Quick Note';
    document.getElementById('content').innerHTML = localStorage['text'] ||
    'This note is stored locally in your browser every second. No need to save here!';

    setInterval(() => {
        localStorage['title'] = document.getElementById('heading').innerHTML;
        localStorage['text'] = document.getElementById('content').innerHTML;
    }, 1000);
    this.data = localStorage;
    return localStorage;
  }

  hasData() {
    this.data = this.getData();
    return this.data;
  }


}

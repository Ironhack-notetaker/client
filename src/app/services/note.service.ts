import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class NoteService {


  constructor (private http: Http) { }

  getOneNote(theId) {
    return this.http.get(`http://localhost:3000/note/${theId}`)
    .map((responseFromApi) => responseFromApi.json());
  }

  getAllNotes() {
    return this.http.get('http://localhost:3000/notes')
    .map((responseFromApi) => responseFromApi.json());
  }

}

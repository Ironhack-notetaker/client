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
    return this.http.get(`http://localhost:3000/notes/${theId}`, {withCredentials: true})
    .map((responseFromApi) => responseFromApi.json());
  }

  deleteNote(theId) {
    const body = {};
    return this.http.post(`http://localhost:3000/note/delete/${theId}`, body, {withCredentials: true})
    .map((responseFromApi) => responseFromApi.json());
  }

  updateNote(theId, theUpdates) {
    return this.http.post(`http://localhost:3000/note/update/${theId}`, theUpdates, {withCredentials: true})
    .map((responseFromApi) => responseFromApi.json());
  }

  createNote(theWholeNote) {
    return this.http.post(`http://localhost:3000/notes/create`, theWholeNote, {withCredentials: true})
    .map((responseFromApi) => responseFromApi.json());
  }

  getAllNotes() {
    return this.http.get('http://localhost:3000/notes', {withCredentials: true})
    .map((responseFromApi) => responseFromApi.json());
  }

  favoriteNote(theId, theNoteId, theNote) {
    return this.http.post(`http://localhost:3000/api/favorites/${theId}/${theNoteId}`, theNote, {withCredentials: true})
    .map((responseFromApi) => responseFromApi.json());
  }

  removeFavorite(theId, theNoteId, theNote) {
    return this.http.post(`http://localhost:3000/api/removefavorite/${theId}/${theNoteId}`, theNote, {withCredentials: true})
    .map((responseFromApi) => responseFromApi.json());
  }

  getFavorites() {
    return this.http.get('http://localhost:3000/api/getfavorites', {withCredentials: true})
    .map((responseFromApi) => responseFromApi.json());
  }

}

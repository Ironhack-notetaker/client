import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class NoteService {


  constructor (private http: Http) { }

  getOneNote(theId) {
    return this.http.get(environment.base_URL + `/n/notes/${theId}`, {withCredentials: true})
    .map((responseFromApi) => responseFromApi.json());
  }

  deleteNote(theId) {
    const body = {};
    return this.http.post(environment.base_URL + `/n/note/delete/${theId}`, body, {withCredentials: true})
    .map((responseFromApi) => responseFromApi.json());
  }

  updateNote(theId, theUpdates) {
    return this.http.post(environment.base_URL + `/n/note/update/${theId}`, theUpdates, {withCredentials: true})
    .map((responseFromApi) => responseFromApi.json());
  }

  createNote(theWholeNote) {
    return this.http.post(environment.base_URL + `/n/notes/create`, theWholeNote, {withCredentials: true})
    .map((responseFromApi) => responseFromApi.json());
  }

  getAllNotes() {
    return this.http.get(environment.base_URL + `/n/notes`, {withCredentials: true})
    .map((responseFromApi) => responseFromApi.json());
  }

  favoriteNote(theId, theNoteId) {
    return this.http.post(environment.base_URL + `/api/favorites/${theId}/${theNoteId}`, {withCredentials: true})
    .map((responseFromApi) => responseFromApi.json());
  }

  removeFavorite(theId, theNoteId) {
    return this.http.post(environment.base_URL + `/api/removefavorite/${theId}/${theNoteId}`, {withCredentials: true})
    .map((responseFromApi) => responseFromApi.json());
  }

  getFavorites() {
    return this.http.get(environment.base_URL + '/api/getfavorites', {withCredentials: true})
    .map((responseFromApi) => responseFromApi.json());
  }

  addUserToNote(noteId, body) {
    return this.http.post(environment.base_URL + `/n/note/adduser/${noteId}`, body, {withCredentials: true})
    .map((responseFromApi) => responseFromApi.json());
  }

}

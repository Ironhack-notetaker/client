import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class TeamService {


  constructor (private http: Http) { }

  getOneTeam(theId) {
    return this.http.get(environment.base_URL + `/t/team/${theId}`, {withCredentials: true})
    .map((responseFromApi) => responseFromApi.json());
  }

  getAllTeams() {
    return this.http.get(environment.base_URL + '/t/team', {withCredentials: true})
    .map((responseFromApi) => responseFromApi.json());
  }

  deleteTeam(theId) {
    const body = {};
    return this.http.post(environment.base_URL + `/t/team/delete/${theId}`, body, {withCredentials: true})
    .map((responseFromApi) => responseFromApi.json());
  }

  updateTeam(theId, theUpdates) {
    return this.http.post(environment.base_URL + `/t/team/update/${theId}`, theUpdates, {withCredentials: true})
    .map((responseFromApi) => responseFromApi.json());
  }

  createTeam(theWholeTeam) {
    return this.http.post(environment.base_URL + `/api/team/new`, theWholeTeam, {withCredentials: true})
    .map((responseFromApi) => responseFromApi.json());
  }

  updateTeamNotes(theTeamId, theNewNote) {
    return this.http.post(environment.base_URL + `/t/team/notes/${theTeamId}`, theNewNote, {withCredentials: true})
    .map((responseFromApi) => responseFromApi.json());
  }

  getUserTeams() {
    return this.http.get(environment.base_URL + '/api/getteams', {withCredentials: true})
    .map((responseFromApi) => responseFromApi.json());
  }

  getTeamNotes(teamId) {
    return this.http.get(environment.base_URL + `/t/getteamnotes/${teamId}`, {withCredentials: true})
    .map((responseFromApi) => responseFromApi.json());
  }

  addUserToTeam(teamId, body) {
    return this.http.post(environment.base_URL + `/t/team/adduser/${teamId}`, body, {withCredentials: true})
    .map((responseFromApi) => responseFromApi.json());
  }

}

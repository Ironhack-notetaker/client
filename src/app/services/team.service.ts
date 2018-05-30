import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class TeamService {


  constructor (private http: Http) { }

  getOneTeam(theId) {
    return this.http.get(`http://localhost:3000/team/${theId}`, {withCredentials: true})
    .map((responseFromApi) => responseFromApi.json());
  }

  getAllTeams() {
    return this.http.get('http://localhost:3000/team', {withCredentials: true})
    .map((responseFromApi) => responseFromApi.json());
  }

  deleteTeam(theId) {
    const body = {};
    return this.http.post(`http://localhost:3000/team/delete/${theId}`, body, {withCredentials: true})
    .map((responseFromApi) => responseFromApi.json());
  }

  updateTeam(theId, theUpdates) {
    return this.http.post(`http://localhost:3000/team/update/${theId}`, theUpdates, {withCredentials: true})
    .map((responseFromApi) => responseFromApi.json());
  }

  createTeam(theWholeTeam) {
    return this.http.post(`http://localhost:3000/api/team/new`, theWholeTeam, {withCredentials: true})
    .map((responseFromApi) => responseFromApi.json());
  }

  updateTeamNotes(theTeamId, theNewNote) {
    return this.http.post(`http://localhost:3000/team/notes/${theTeamId}`, theNewNote, {withCredentials: true})
    .map((responseFromApi) => responseFromApi.json());
  }

  getUserTeams() {
    return this.http.get('http://localhost:3000/api/getteams', {withCredentials: true})
    .map((responseFromApi) => responseFromApi.json());
  }

  getTeamNotes(teamId) {
    return this.http.get(`http://localhost:3000/getteamnotes/${teamId}`, {withCredentials: true})
    .map((responseFromApi) => responseFromApi.json());
  }

  addUserToTeam(teamId, body) {
    return this.http.post(`http://localhost:3000/team/adduser/${teamId}`, body, {withCredentials: true})
    .map((responseFromApi) => responseFromApi.json());
  }

}

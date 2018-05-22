import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AuthService } from './services/auth.service';
import { NoteService } from './services/note.service';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { NotesListComponent } from './notes-list/notes-list.component';
import { NoteItemComponent } from './note-item/note-item.component';
import { TeamsListComponent } from './teams-list/teams-list.component';
import { TeamNotesListComponent } from './team-notes-list/team-notes-list.component';
import { TeamNoteItemComponent } from './team-note-item/team-note-item.component';


const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full'},
  { path: 'notes', component: NotesListComponent },
  { path: 'notes/:id', component: NoteItemComponent },
 ];

@NgModule({
  declarations: [
    AppComponent,
    UserProfileComponent,
    NotesListComponent,
    NoteItemComponent,
    TeamsListComponent,
    TeamNotesListComponent,
    TeamNoteItemComponent
  ],
  imports: [
  HttpModule,
  BrowserModule,
  FormsModule,
  RouterModule.forRoot(routes),
  ],
  providers: [AuthService, NoteService],
  bootstrap: [AppComponent]
})
export class AppModule { }

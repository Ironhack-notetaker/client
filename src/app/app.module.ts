// Modules
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';

// Components and services
import { AppComponent } from './app.component';
import { AuthService } from './services/auth.service';
import { NoteService } from './services/note.service';
import { TeamService } from './services/team.service';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { NotesListComponent } from './notes-list/notes-list.component';
import { NoteItemComponent } from './note-item/note-item.component';
import { TeamsListComponent } from './teams-list/teams-list.component';
import { TeamNotesListComponent } from './team-notes-list/team-notes-list.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'welcome', pathMatch: 'full'},
  { path: 'notes', component: NotesListComponent },
  { path: 'notes/:id', component: NoteItemComponent },
  { path: 'user', component: UserProfileComponent },
  { path: 'teams', component: TeamsListComponent },
  { path: 'teams/:id', component: TeamNotesListComponent },
  { path: 'welcome', component: LandingPageComponent },
 ];

@NgModule({
  declarations: [
    AppComponent,
    UserProfileComponent,
    NotesListComponent,
    NoteItemComponent,
    TeamsListComponent,
    TeamNotesListComponent,
    LandingPageComponent
  ],
  imports: [
  HttpModule,
  BrowserModule,
  FormsModule,
  RouterModule.forRoot(routes),
  // NgbModule.forRoot(),
  BsDropdownModule.forRoot(),
  TooltipModule.forRoot(),
  ModalModule.forRoot()
  ],
  providers: [AuthService, NoteService, TeamService],
  bootstrap: [AppComponent]
})
export class AppModule { }

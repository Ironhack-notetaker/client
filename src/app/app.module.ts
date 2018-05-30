// Modules
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { EditorModule } from '@tinymce/tinymce-angular';
import { NgxPaginationModule } from 'ngx-pagination';

// Components and services
import { AppComponent } from './app.component';
import { AuthService } from './services/auth.service';
import { NoteService } from './services/note.service';
import { TeamService } from './services/team.service';
import { DataService } from './services/quicky.service';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { NotesListComponent } from './notes-list/notes-list.component';
import { NoteItemComponent } from './note-item/note-item.component';
import { TeamsListComponent } from './teams-list/teams-list.component';
import { TeamNotesListComponent } from './team-notes-list/team-notes-list.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { QuickNoteComponent } from './quick-note/quick-note.component';
import { AboutUsComponent } from './about-us/about-us.component';

const routes: Routes = [
  { path: '', redirectTo: 'welcome', pathMatch: 'full'},
  { path: 'notes', component: NotesListComponent },
  { path: 'notes/:id', component: NoteItemComponent },
  { path: 'user', component: UserProfileComponent },
  { path: 'teams', component: TeamsListComponent },
  { path: 'teams/:id', component: TeamNotesListComponent },
  { path: 'welcome', component: LandingPageComponent },
  { path: 'quicky', component: QuickNoteComponent },
  { path: 'about', component: AboutUsComponent }
 ];

@NgModule({
  declarations: [
    AppComponent,
    UserProfileComponent,
    NotesListComponent,
    NoteItemComponent,
    TeamsListComponent,
    TeamNotesListComponent,
    LandingPageComponent,
    QuickNoteComponent,
    AboutUsComponent
  ],
  imports: [
  HttpModule,
  BrowserModule,
  FormsModule,
  NgxPaginationModule,
  RouterModule.forRoot(routes),
  BsDropdownModule.forRoot(),
  TooltipModule.forRoot(),
  ModalModule.forRoot(),
  EditorModule
  ],
  providers: [AuthService, NoteService, TeamService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

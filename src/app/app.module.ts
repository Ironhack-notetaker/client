import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AuthService } from './services/auth.service';

const routes: Routes = [
  { path: '', redirectTo: 'index', pathMatch: 'full'},
  // { path: 'index', component: TaskListComponent },
  // { path: 'task/:id', component: TaskDetailsComponent},
 ];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
  HttpModule,
  BrowserModule,
  FormsModule,
  RouterModule.forRoot(routes),
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }

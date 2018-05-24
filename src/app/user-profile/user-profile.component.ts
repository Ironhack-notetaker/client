import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  formInfo: any = {username: '', password: ''};
  user: any;
  error: string;

  constructor( private myService: AuthService, private myRouter: Router ) { }

  ngOnInit() {

  }



}

import { LocationServiceService } from './../location-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public map: LocationServiceService) { }

  ngOnInit() {
    console.log(this.map.loggedIn);
  }

  login() {
    this.map.loggedIn = true;
    console.log(this.map.loggedIn);
  }
}

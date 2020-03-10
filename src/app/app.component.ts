import { LocationServiceService } from './location-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'AtmFinder';
  loggedIn = true;
  constructor(public map: LocationServiceService){

  }

  ngOnInit() {
  }
}

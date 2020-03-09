import {
  LocationServiceService
} from './../location-service.service';
import {
  Component,
  OnInit,
  AfterContentInit,
  AfterViewInit
} from '@angular/core';
import {
  environment
} from 'src/environments/environment';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-atmfinder',
  templateUrl: './atmfinder.component.html',
  styleUrls: ['./atmfinder.component.scss']
})
export class AtmfinderComponent implements OnInit {

  constructor( private mapboxService: LocationServiceService) {}

  ngOnInit() {

  }


}

import { LocationServiceService } from "./../location-service.service";
import {
  Component,
  OnInit,
  AfterContentInit,
  AfterViewInit
} from "@angular/core";
import { environment } from "src/environments/environment";
import * as mapboxgl from "mapbox-gl";
import { NgxMapboxGLModule } from "ngx-mapbox-gl";

@Component({
  selector: "app-atmfinder",
  templateUrl: "./atmfinder.component.html",
  styleUrls: ["./atmfinder.component.scss"]
})
export class AtmfinderComponent implements OnInit {
  constructor(private mapboxService: LocationServiceService) {}

  bank;
  center;
  ngOnInit() {
    this.mapboxService.getBank().subscribe(data => {
      this.bank = data;
    });
  }

  onAtmClick(b) {
    console.log([b["latitude"], b["longitude"]]);
    this.center = [b["latitude"], b["longitude"]];
  }

  alert(feature) {
    console.log(feature);
  }
}

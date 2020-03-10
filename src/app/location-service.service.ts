import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class LocationServiceService {
  constructor(private http: HttpClient) {}

  BASE_URL = " http://localhost:3000/data";

  getBank() {
    return this.http.get(this.BASE_URL);
  }
}

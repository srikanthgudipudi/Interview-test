import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegionService {

  constructor(private http: HttpClient) { }


  // To get details
  getDetails(data) {
    return this.http.get('https://restcountries.eu/rest/v2/region/' + data);
  }
}

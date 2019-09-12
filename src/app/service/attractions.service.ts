import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AttractionsService {

  constructor(private http: HttpClient, ) { }

  getCoordinates(params) {
    const url = `http://localhost:3000/coordinates`;
    return this.http.get(url, { params }).pipe();
  }
}

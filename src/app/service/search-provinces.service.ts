import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { State } from '../models/search/search-province.model';


@Injectable({
  providedIn: 'root'
})
export class SearchProvincesService {

  constructor(private http: HttpClient, ) { }

  getState(): Observable<any> {
    const url = `http://localhost:3000/states`;
    return this.http.get(url).pipe();
  }
}

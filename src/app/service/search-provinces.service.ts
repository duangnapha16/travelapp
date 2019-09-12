import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SearchProvincesService {

  constructor(private http: HttpClient, ) { }

  getState(): Observable<any> {
    const url = `http://localhost:3000/api/state?`;
    return this.http.get(url).pipe();
  }
}

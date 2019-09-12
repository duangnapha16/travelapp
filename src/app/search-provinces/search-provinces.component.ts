import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { State } from '../models/search/search-province.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-search-provinces',
  templateUrl: './search-provinces.component.html',
  styleUrls: ['./search-provinces.component.css']
})
export class SearchProvincesComponent implements OnInit {
  stateCtrl = new FormControl();
  filteredStates: Observable<State[]>;
  searchProvinces: FormGroup;
  states: State[] = [
    {
      name: 'นครนายก',
    },
    {
      name: 'ตาก',
    },
    {
      name: '่ระนอง',
    },
    {
      name: 'ปราจีนบุรี',
    },
    {
      name: 'บึงกาฬ',
    },
    {
      name: 'พัทลุง',
    },
    {
      name: 'สุพรรณบุรี',
    }
  ];

  constructor(private http: HttpClient) {
    //other
    this.filteredStates = this.stateCtrl.valueChanges
      .pipe(
        startWith(''),
        map(state => state ? this._filterStates(state) : this.states.slice())
      );
  }

  ngOnInit() {
    this.http.get('https://jsonplaceholder.typicode.com').subscribe(data => {
      console.log(data);
    });
  }

  private _filterStates(value: string): State[] {
    const filterValue = value.toLowerCase();

    return this.states.filter(state => state.name.toLowerCase().indexOf(filterValue) === 0);
  }
}

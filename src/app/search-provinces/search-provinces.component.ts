import { Component, OnInit, OnChanges, SimpleChange } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith, tap } from 'rxjs/operators';
import { State } from '../models/search/search-province.model';
import { HttpClient } from '@angular/common/http';
import { SearchProvincesService } from '../service/search-provinces.service';
import { AttractionsService } from '../service/attractions.service';

@Component({
  selector: 'app-search-provinces',
  templateUrl: './search-provinces.component.html',
  styleUrls: ['./search-provinces.component.css']
})
export class SearchProvincesComponent implements OnInit {

  stateCtrl = new FormControl();
  filteredStates: Observable<any>;
  searchProvinces: FormGroup;
  states: State[] = [];
  getState: any;
  selected: any;
  attractionList;

  constructor(private http: HttpClient,
              private service: SearchProvincesService,
              private attraction: AttractionsService) {
  }

  // ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
  //   console.log(this.stateCtrl.value);
  // }

   ngOnInit() {
    // this.http.get('https://jsonplaceholder.typicode.com').subscribe(data => {
    //   console.log(data);
    // })}
    this.service.getState().subscribe(data => {
      console.log(data);
      this.states = data;
      this.trackStateCtrl();
    });
  }

  private trackStateCtrl() {
    this.filteredStates = this.stateCtrl.valueChanges
      .pipe(
        startWith(''),
        map(state => state ? this._filterStates(state) : this.states.slice())
      );
    // console.log(this.filteredStates);
  }

  private _filterStates(value: string): State[] {
    console.log('_filterStates');
    const filterValue = value.toLowerCase();

    return this.states.filter(state => state.name.toLowerCase().indexOf(filterValue) === 0);
  }

  onClickSearchButton() {
    const params = {
      name: this.stateCtrl.value,
    };
    console.log(params);
    this.attraction.getCoordinates(params).subscribe(data => {
      console.log(data);
      this.attractionList = data;
    });

  }
}

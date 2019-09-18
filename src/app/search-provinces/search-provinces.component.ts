import { Component, OnInit, OnChanges, SimpleChange, NgZone, ElementRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { SearchProvincesService } from '../service/search-provinces.service';
import { State } from '../models/search/search-province.model';
import { AttractionsService } from '../service/attractions.service';
import { MapsAPILoader, MouseEvent } from '@agm/core';


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

  // map
  title = 'AGM project';
  latitude: number;
  longitude: number;
  zoom: number;
  address: string;
  hideMap = true;
  private geoCoder;
  @ViewChild('search', { static: false })
  public searchElementRef: ElementRef;
  constructor(private http: HttpClient,
              private service: SearchProvincesService,
              private attraction: AttractionsService,
              private mapsAPILoader: MapsAPILoader,
              private ngZone: NgZone) {
  }

  ngOnInit() {
    this.zoom = 8;
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
  }

  private _filterStates(value: string): State[] {
    console.log('_filterStates');
    const filterValue = value.toLowerCase();
    return this.states.filter(state => state.name.toLowerCase().indexOf(filterValue) === 0);
  }

  onClickSearchButton() {
    this.hideMap = false;
    const params = {
      name: this.stateCtrl.value,
    };
    this.attraction.getCoordinates(params).subscribe(data => {
    this.attractionList = data;
    });
  }
}

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
  states2: any[];
  getState: any;
  selected: any;
  attractionList;

  // map
  title = 'AGM project';
  latitude: number;
  longitude: number;
  zoom: number;
  address: string;
  private geoCoder;
  @ViewChild('search', { static: false })
  public searchElementRef: ElementRef;
  constructor(private http: HttpClient,
              private service: SearchProvincesService,
              private attraction: AttractionsService,
              private mapsAPILoader: MapsAPILoader,
              private ngZone: NgZone) {
  }

  // ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
  //   console.log(this.stateCtrl.value);
  // }

  ngOnInit() {
    this.service.getState().subscribe(data => {
      console.log(data);
      this.states = data;
      this.trackStateCtrl();
    });

    this.service.getCoordinates().subscribe(data => {
      console.log('data2', data);
      this.states2 = data;

    });

    // map
    this.mapsAPILoader.load().then(() => {
      this.setCurrentLocation();
      // tslint:disable-next-line: new-parens
      this.geoCoder = new google.maps.Geocoder;
      // const autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
      //   types: ['address']
      // });
      // autocomplete.addListener('place_changed', () => {
      //   this.ngZone.run(() => {
      //     // get the place result
      //     const place: google.maps.places.PlaceResult = autocomplete.getPlace();

      //     // verify result
      //     if (place.geometry === undefined || place.geometry === null) {
      //       return;
      //     }

      //     // set latitude, longitude and zoom
      //     this.latitude = place.geometry.location.lat();
      //     this.longitude = place.geometry.location.lng();
      //     this.zoom = 12;
      //   });
      // });

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
    const params = {
      name: this.stateCtrl.value,
    };
    console.log(params);
    this.attraction.getCoordinates(params).subscribe(data => {
      console.log(data);
      this.attractionList = data;
    });

  }
  // map
  private setCurrentLocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 15;
      });
    }
  }

  markerDragEnd($event: MouseEvent) {
    console.log('$event', $event);
    this.latitude = $event.coords.lat;
    this.longitude = $event.coords.lng;
    this.getAddress(this.latitude, this.longitude);
  }


  getAddress(latitude, longitude) {
    this.geoCoder.geocode({ location: { lat: latitude, lng: longitude } }, (results, status) => {
      console.log('results', results);
      console.log('status)', status);
      if (status === 'OK') {
        if (results[0]) {
          this.zoom = 12;
          this.address = results[0].formatted_address;
        } else {
          window.alert('No results found');
        }
      } else {
        window.alert('Geocoder failed due to: ' + status);
      }
    });
  }
}

import { Component, OnInit, NgZone, ElementRef, ViewChild } from '@angular/core';
import { MapsAPILoader, MouseEvent } from '@agm/core';
import { HttpClient } from '@angular/common/http';
import { SearchProvincesService } from '../service/search-provinces.service';
import { AttractionsService } from '../service/attractions.service';
import { State } from '../models/search/search-province.model';
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  title = 'AGM project';
  latitude: number;
  longitude: number;
  zoom: number;
  address: string;
  private geoCoder;


  // getData Form Db.josn
  states;
  @ViewChild('search', { static: false })
  public searchElementRef: ElementRef;

  constructor(
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone,
    private http: HttpClient,
    private service: SearchProvincesService,
    private attraction: AttractionsService
  ) { }

  ngOnInit() {
    this.mapsAPILoader.load().then(() => {
      this.setCurrentLocation();
      // tslint:disable-next-line: new-parens
      this.geoCoder = new google.maps.Geocoder;

      const autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
        types: ['address']
      });
      autocomplete.addListener('place_changed', () => {
        this.ngZone.run(() => {
          // get the place result
          const place: google.maps.places.PlaceResult = autocomplete.getPlace();

          // verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }

          // set latitude, longitude and zoom
          this.latitude = place.geometry.location.lat();
          this.longitude = place.geometry.location.lng();
          this.zoom = 12;
        });
      });
    });

    this.service.getCoordinates().subscribe(data => {
      console.log('data', data);
      this.states = data;
    });



  }

  private setCurrentLocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        // this.latitude = 14.2524816;
        // this.longitude = 100.73233319999997;
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
    // tslint:disable-next-line: object-literal-key-quotes
    this.geoCoder.geocode({ 'location': { lat: latitude, lng: longitude } }, (results, status) => {
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


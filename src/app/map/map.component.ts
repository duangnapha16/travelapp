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

    this.service.getCoordinates().subscribe(data => {
      console.log('data', data);
      this.states = data;
    });



  }



}


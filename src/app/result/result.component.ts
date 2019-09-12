import { Component, OnInit } from '@angular/core';
import { Attractions } from '../models/attractions/attractions.model';
import { AttractionsService } from '../service/attractions.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  coordinates: any;
  constructor(private coordinate: AttractionsService) { }

  ngOnInit() {
    // this.coordinate.getCoordinates().subscribe(data => {
    //   console.log(data);
    //   this.coordinates = data;
    // });
  }

}

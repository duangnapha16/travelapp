import { Component, OnInit } from '@angular/core';
import { Attractions } from '../models/attractions/attractions.model';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  states: Attractions[] = [
    {
      nameAttractions: 'นครนายก',
      detail: '  ',
    },
    {
      nameAttractions: 'ตาก',
      detail: ' ',
    },
    {
      nameAttractions: '่ระนอง',
      detail: ''
    },
    {
      nameAttractions: 'ปราจีนบุรี',
      detail: ' ',
    },
    {
      nameAttractions: 'บึงกาฬ',
      detail: ' ',
    },
    {
      nameAttractions: 'พัทลุง',
      detail: ' ',
    },
    {
      nameAttractions: 'สุพรรณบุรี',
      detail: ' ',
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}

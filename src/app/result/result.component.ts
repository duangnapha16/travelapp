import { Component, OnInit } from '@angular/core';
import { Attractions } from '../models/attractions/attractions.model';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  attractions: Attractions[] = [
   {
  name : 'NakornNayok',
  place: [
    {
      name: 'เขื่อนขุนด่านปราการชล',
      detail: ' เป็นเขื่อนที่มีวิวทิวทัศน์สวยงามเหมาะแก่การพักผ่อนชมวิว สร้างเพื่อเก็บกักน้ำในช่วงหน้าฝนไว้ในหน้าแล้ง'
    },
    {
      name: 'อุทยานวังตะไคร้',
      // tslint:disable-next-line: max-line-length
      detail: 'เป็นสถานที่พักผ่อนเหมาะในการเล่นน้ำลำธารน้ำจะมีน้ำเต็มฝั่งไหลเชี่ยวจัดจึงเป็นที่เล่นกีฬาล่องแก่งด้วยแพยางหรือชูชีพกันอย่างสนุกสนาน'
    },
    {
      name: 'เขาหล่นผจญภัย',
      // tslint:disable-next-line: max-line-length
      detail: 'เป็นศูนย์กิจกรรมแอนเวนเจอร์ ที่มีกิจกรรมมากมาย ทั้งปีนผา โรยตัว ขับรถเอทีวี  ปั่นจักรยานดาวฮิลล์'
    },
    {
      name: 'สะพานไม้ไผ่ทุ่งนามุ้ย',
      // tslint:disable-next-line: max-line-length
      detail: 'เป็นภาพสะพานไม้ไผ่รูปตัวเอส ความยาว 150 เมตรบรรยากาศร่มรื่นด้วยต้นไม้สีเขียวและทิวเขาน้อยใหญ่รูปทรงแปลกตา '
    },
  ]
},
{
  name : 'tak',
  place: [
    {
      name: 'น้ำตกทีลอซู',
      detail: ' เป็นเขื่อนที่มีวิวทิวทัศน์สวยงามเหมาะแก่การพักผ่อนชมวิว สร้างเพื่อเก็บกักน้ำในช่วงหน้าฝนไว้ในหน้าแล้ง'
    },
    {
      name: 'อุทยานวังตะไคร้',
      // tslint:disable-next-line: max-line-length
      detail: 'เป็นสถานที่พักผ่อนเหมาะในการเล่นน้ำลำธารน้ำจะมีน้ำเต็มฝั่งไหลเชี่ยวจัดจึงเป็นที่เล่นกีฬาล่องแก่งด้วยแพยางหรือชูชีพกันอย่างสนุกสนาน'
    },
    {
      name: 'เขาหล่นผจญภัย',
      // tslint:disable-next-line: max-line-length
      detail: 'เป็นศูนย์กิจกรรมแอนเวนเจอร์ ที่มีกิจกรรมมากมาย ทั้งปีนผา โรยตัว ขับรถเอทีวี  ปั่นจักรยานดาวฮิลล์'
    },
    {
      name: 'สะพานไม้ไผ่ทุ่งนามุ้ย',
      // tslint:disable-next-line: max-line-length
      detail: 'เป็นภาพสะพานไม้ไผ่รูปตัวเอส ความยาว 150 เมตรบรรยากาศร่มรื่นด้วยต้นไม้สีเขียวและทิวเขาน้อยใหญ่รูปทรงแปลกตา '
    },

  ],
}
];

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'carousel-final',
  templateUrl: './carousel-final.component.html',
  styleUrls: ['./carousel-final.component.css']
})
export class CarouselFinalComponent implements OnInit {
  items: Array<any> = []

  constructor() {
    this.items = [
      { name: '../../assets/img/carousel1.jpg' },
      { name: '../../assets/img/carousel2.jpg' },
      { name: '../../assets/img/carousel3.jpeg' },
      { name: '../../assets/img/carousel4.jpg'},
    ]
   }

  ngOnInit() {
  }

}

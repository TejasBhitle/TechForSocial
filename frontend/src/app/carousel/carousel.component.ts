import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { FirebaseDbService } from '../firebase-db.service';
@Component({
  selector: 'carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
  providers: [ NgbCarouselConfig ]
})
export class CarouselComponent implements OnInit {

  news = []
  carousel_images_rel_paths = [
    'assets/img/carousel1.jpg',
    'assets/img/carousel2.jpg',
    'assets/img/carousel3.jpeg',
    'assets/img/carousel4.jpg',
  ]
  i = 0

  constructor(config: NgbCarouselConfig, private firebaseDb: FirebaseDbService) {
    // customize default values of carousels used by this component tree
    config.interval = 4000;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = false;
  }


  ngOnInit() {
    this.firebaseDb.getNews().subscribe(
      value => {
        this.news = value.map( x => { 
          let obj = Object.assign({},x)
          obj["img"] = this.carousel_images_rel_paths[this.i%this.carousel_images_rel_paths.length]
          this.i++
          return obj
        })
      }
    );
  }

}
import { carouselComponent } from './carousel/app.carouselComponent';
import { descriptionComponent } from './description/app.descriptionComponent';
import { navbarComponent } from './navbar/app.navbarComponent';
import { OwlModule } from 'ngx-owl-carousel';
import { courseComponent } from './courses/app.courseComponent';
import { Component } from '@angular/core';
import { $ } from 'protractor';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css']
})
export class AppComponent {
  // images : Array<any> = [];

  constructor(){
    // this.images = [
    //   { name : 'img/thumb1.jpg'},
    //   { name : 'img/thumb2.jpg'},
    //   { name : 'img/thumb3.jpg'},
    //   { name : 'img/thumb4.jpg'},
    //   { name : 'img/thumb5.jpg'}

    // ]
    // $('.slider').owlCarousel({
    //   items: 3,
    //   autoplay: true,
    //   smartSpeed: 700,
    //   loop: true,
    //   autoplayHoverPause: true,
    // });
  }
}

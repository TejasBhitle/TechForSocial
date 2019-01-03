import { carouselComponent } from './carousel/app.carouselComponent';
import { descriptionComponent } from './description/app.descriptionComponent';
import { navbarComponent } from './navbar/app.navbarComponent';
import { OwlModule } from 'ngx-owl-carousel';
import { CourseComponent } from './course/course.component';
import { Component } from '@angular/core';
import { $ } from 'protractor';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {

  constructor(){
  }
}

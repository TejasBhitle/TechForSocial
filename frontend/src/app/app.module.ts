import { carouselComponent } from './carousel/app.carouselComponent';
import { descriptionComponent } from './description/app.descriptionComponent';
import { navbarComponent } from './navbar/app.navbarComponent';
import { CourseComponent } from './course/course.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { NgModule } from '@angular/core'; 

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NewsComponent } from './news/news.component';

import { NewsService } from './news/news.service';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    navbarComponent,
    descriptionComponent,
    carouselComponent,
    NewsComponent
  ],
  imports: [
    BrowserModule, 
    NgbModule,
    HttpClientModule,
   
  ],
  providers: [
    NewsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

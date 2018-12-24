 import { carouselComponent } from './carousel/app.carouselComponent';
import { descriptionComponent } from './description/app.descriptionComponent';
import { navbarComponent } from './navbar/app.navbarComponent';
import { courseComponent } from './courses/app.courseComponent';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'; 

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [
    AppComponent,
    courseComponent,
    navbarComponent,
    descriptionComponent,
     carouselComponent
  ],
  imports: [
    BrowserModule , NgbModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

/*Modules*/
import { NgModule } from '@angular/core'; 
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

/*Components*/
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { carouselComponent } from './carousel/app.carouselComponent';
import { CourseComponent } from './course/course.component';
import { ProjectComponent } from './project/project.component';
import { PeopleComponent } from './people/people.component';
import { PublicationComponent } from './publication/publication.component';
import { FaqComponent } from './faq/faq.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AdminComponent } from './admin/admin.component';
import { ReleasesComponent } from './releases/releases.component';

/*Services*/
import { APIService } from './api.service';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    carouselComponent,
    NewsComponent,
    HomeComponent,
    ProjectComponent,
    PeopleComponent,
    PublicationComponent,
    FaqComponent,
    NavbarComponent,
    AdminComponent,
    ReleasesComponent,
  ],
  imports: [
    BrowserModule, 
    NgbModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:'',component:HomeComponent},
      {path:'projects', component: ProjectComponent},
      {path:'people',component: PeopleComponent},
      {path:'publications', component: PublicationComponent},
      {path:'faq', component: FaqComponent},
      {path: 'releases', component: ReleasesComponent},
      {path:'admin', component: AdminComponent}
    ])
  ],
  providers: [
    APIService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

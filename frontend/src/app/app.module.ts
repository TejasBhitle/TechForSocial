/*Modules*/
import { NgModule } from '@angular/core'; 
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AngularFireModule } from '@angular/fire'
import { AngularFirestoreModule, FirestoreSettingsToken } from '@angular/fire/firestore';

/*Components*/
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CourseComponent } from './course/course.component';
import { ProjectComponent } from './project/project.component';
import { PeopleComponent } from './people/people.component';
import { PublicationComponent } from './publication/publication.component';
import { FaqComponent } from './faq/faq.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AdminComponent } from './admin/admin.component';
import { ReleasesComponent } from './releases/releases.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';

/*Admin components */
import { NewsAdminComponent } from './admin/news-admin/news-admin.component';
import { FaqsAdminComponent } from './admin/faqs-admin/faqs-admin.component';

/*Services*/
import { APIService } from './api.service';
import { FooterComponent } from './footer/footer.component';
import { JoinUsComponent } from './join-us/join-us.component';
import { FirebaseDbService } from './firebase-db.service';

import { environment } from 'src/environments/environment.prod';


@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    CarouselComponent,
    NewsComponent,
    HomeComponent,
    ProjectComponent,
    PeopleComponent,
    PublicationComponent,
    FaqComponent,
    NavbarComponent,
    AdminComponent,
    ReleasesComponent,
    NewsAdminComponent,
    FaqsAdminComponent,
    FooterComponent,
    JoinUsComponent,
    ProjectDetailsComponent,
  ],
  imports: [
    BrowserModule, 
    NgbModule.forRoot(),
    HttpClientModule,
    FormsModule,
    AngularFontAwesomeModule,
    
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,

    RouterModule.forRoot([
      {path:'',component:HomeComponent},
      {path:'projects', component: ProjectComponent},
      {path:'projectdetails', component :ProjectDetailsComponent},
      {path:'people',component: PeopleComponent},
      {path:'publications', component: PublicationComponent},
      {path:'faq', component: FaqComponent},
      {path:'releases', component: ReleasesComponent},
      {
        path:'admin', 
        component: AdminComponent,
        data : { hide_navbar : true} ,
        children: [
          {
            path: 'news',
            component: NewsAdminComponent
          },
          {
            path: 'faqs',
            component: FaqsAdminComponent
          },
        ]
      }
    ])
  ],
  providers: [
    APIService,
    FirebaseDbService,
    { provide: FirestoreSettingsToken, useValue: {} }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

/*Modules*/
import { NgModule } from '@angular/core'; 
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';
import { OwlModule } from 'ngx-owl-carousel';

import { AngularFireModule } from '@angular/fire'
import { AngularFirestoreModule, FirestoreSettingsToken } from '@angular/fire/firestore';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


/*Components*/
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ProjectComponent } from './project/project.component';
import { PeopleComponent } from './people/people.component';
import { PublicationComponent } from './publication/publication.component';
import { FaqComponent } from './faq/faq.component'
import { NavbarComponent } from './navbar/navbar.component';
import { ReleasesComponent } from './releases/releases.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';

/*Services*/
import { FooterComponent } from './footer/footer.component';
import { JoinUsComponent } from './join-us/join-us.component';
import { FirebaseDbService } from './firebase-db.service';

import { environment } from 'src/environments/environment.prod';
import { ShortTextPipe } from './short-text.pipe';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    NewsComponent,
    HomeComponent,
    ProjectComponent,
    PeopleComponent,
    PublicationComponent,
    FaqComponent,
    NavbarComponent,
    ReleasesComponent,
    FooterComponent,
    JoinUsComponent,
    ProjectDetailsComponent,
    ShortTextPipe,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule, 
    NgbModule.forRoot(),
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    OwlModule,
    
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,

    RouterModule.forRoot([
      {path:'',component:HomeComponent},
      {path:'projects', component: ProjectComponent},
      {path:'project/:slug', component :ProjectDetailsComponent},
      {path:'people',component: PeopleComponent},
      {path:'publications', component: PublicationComponent},
      {path:'faq', component: FaqComponent},
      {path:'releases', component: ReleasesComponent},
      {path:'not-found', component:PageNotFoundComponent},
      {path:'**',redirectTo:'not-found'}
    ])
  ],
  providers: [
    FirebaseDbService,
    { provide: FirestoreSettingsToken, useValue: {} }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

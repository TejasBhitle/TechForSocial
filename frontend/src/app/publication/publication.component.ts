import { Component, OnInit, OnDestroy } from '@angular/core';
import { FirebaseDbService } from '../firebase-db.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-publication',
  templateUrl: './publication.component.html',
  styleUrls: ['./publication.component.css']
})
export class PublicationComponent implements OnInit, OnDestroy {

  subscription: Subscription
  pub_years$ = {}
  pub_years_keys$ = []
  showSpinner: boolean = false

  constructor(private firebaseDb: FirebaseDbService) { }

  ngOnInit() {
    let localPublicationsKeys = sessionStorage.getItem('publications-keys')
    let localPublicationYears = sessionStorage.getItem('publication-years')
    if(!localPublicationsKeys){
      this.showSpinner = true
      this.subscription = this.firebaseDb.getPublications().subscribe(
        publications => {
          this.pub_years$ = {}
          for(let pub of publications){
            if(!this.pub_years$[pub['year']])
              this.pub_years$[pub['year']] = []
  
            this.pub_years$[pub['year']].push(pub)
          }
          this.pub_years_keys$ = Object.keys(this.pub_years$)
          this.showSpinner = false
          this.subscription.unsubscribe()
          sessionStorage.setItem('publications-keys',JSON.stringify(this.pub_years_keys$))
          sessionStorage.setItem('publication-years',JSON.stringify(this.pub_years$))
        }
      )
    }
    else{
      this.pub_years_keys$ = JSON.parse(localPublicationsKeys)
      this.pub_years$ = JSON.parse(localPublicationYears)
    }
  }

  ngOnDestroy(){
    if(this.subscription){
      this.subscription.unsubscribe()
    }
  }

}

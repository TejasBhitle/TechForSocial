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

  constructor(private firebaseDb: FirebaseDbService) { }

  ngOnInit() {
    this.subscription = this.firebaseDb.getPublications().subscribe(
      publications => {
        this.pub_years$ = {}
        for(let pub of publications){
          if(!this.pub_years$[pub['year']])
            this.pub_years$[pub['year']] = []

          this.pub_years$[pub['year']].push(pub)
        }
        this.pub_years_keys$ = Object.keys(this.pub_years$)
        this.subscription.unsubscribe()
      }
    )
  }

  ngOnDestroy(){
    if(this.subscription){
      this.subscription.unsubscribe()
    }
  }

}

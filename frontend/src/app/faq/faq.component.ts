import { Component, OnInit, OnDestroy } from '@angular/core';
import { FAQ } from './faq';
import { FirebaseDbService } from '../firebase-db.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit, OnDestroy {

  faqs = []
  subscription : Subscription

  constructor(private firebaseDb: FirebaseDbService) { }

  ngOnInit(){
    this.subscription = this.firebaseDb.getFAQs().subscribe(
      value => {
        this.faqs = value.map( x => { 
          let obj = Object.assign({},x)
          obj["isHidden"] = true
          return obj
        })
        this.subscription.unsubscribe()
      }
    )
  }

  ngOnDestroy(){
    if(this.subscription)
      this.subscription.unsubscribe()
  }

  
}

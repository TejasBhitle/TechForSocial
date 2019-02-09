import { Component, OnInit, OnDestroy } from '@angular/core';
import { FAQ } from './faq';
import { FirebaseDbService } from '../firebase-db.service';
import { Subscription } from 'rxjs';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit, OnDestroy {

  faqs = []
  subscription : Subscription
  showSpinner: boolean = false

  constructor(private firebaseDb: FirebaseDbService,private title :Title) { }

  ngOnInit(){
    this.title.setTitle("TechForSocial - faq")
    let localfaqs = sessionStorage.getItem('faqs')
    if(!localfaqs){
      this.showSpinner=true
      this.subscription = this.firebaseDb.getFAQs().subscribe(
        value => {
          this.faqs = value.map( x => { 
            let obj = Object.assign({},x)
            obj["isHidden"] = true
            return obj
          })
          this.showSpinner=false
          this.subscription.unsubscribe()
          sessionStorage.setItem('faqs',JSON.stringify(this.faqs))
        }
      )
    }
    else{
      this.faqs = JSON.parse(localfaqs)
    }
    
  }

  ngOnDestroy(){
    if(this.subscription)
      this.subscription.unsubscribe()
  }

  
}

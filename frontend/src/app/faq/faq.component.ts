import { Component, OnInit } from '@angular/core';
import { FAQ } from './faq';
import { FirebaseDbService } from '../firebase-db.service';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {

  faqs = []

  constructor(private firebaseDb: FirebaseDbService) { }

  ngOnInit(){
    this.firebaseDb.getFAQs().subscribe(
      value => {
        this.faqs = value.map( x => { 
          let obj = Object.assign({},x)
          obj["isHidden"] = true
          return obj
        })
      }
    );
  }
  
}

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
  isHidden1 = true;
  isHidden2 = true;
  isHidden3 = true;
  isHidden4 = true;
  isHidden5 = true;

  ngOnInit(){
    this.firebaseDb.getFAQs().subscribe(
      value => this.faqs = value
    );
  }
  
}

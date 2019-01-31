import { Component, OnInit } from '@angular/core';
import { News } from './news'
import { FirebaseDbService } from '../firebase-db.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit{

  news = [];
  subscription: Subscription

  constructor(private firebaseDb: FirebaseDbService) { }

  ngOnInit(){
    this.subscription = this.firebaseDb.getNews().subscribe(
      value => {
        this.news = value
        this.subscription.unsubscribe()
      }
    );
  }

  ngOnDestroy(){
    if(this.subscription)
      this.subscription.unsubscribe()
  }

}

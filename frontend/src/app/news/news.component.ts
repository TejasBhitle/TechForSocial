import { Component, OnInit } from '@angular/core';
import { News } from './news'
import { FirebaseDbService } from '../firebase-db.service';

@Component({
  selector: 'news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit{

  news = [];

  constructor(private firebaseDb: FirebaseDbService) { }

  ngOnInit(){
    this.firebaseDb.getNews().subscribe(
      value => this.news = value
    );
  }


}

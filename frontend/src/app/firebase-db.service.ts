import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { News } from './news/news';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FirebaseDbService {

  constructor(private afs: AngularFirestore) { }

  getNews(){
    return this.afs.collection('news')
  }

  createNews(news: News){
    return this.afs.collection('news').add(news)
  }

}

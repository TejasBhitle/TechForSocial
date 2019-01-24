import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { News } from './news/news';
import { Observable } from 'rxjs';

import { map } from 'rxjs/operators'
import { FAQ } from './faq/faq';


@Injectable({
  providedIn: 'root'
})
export class FirebaseDbService {

  constructor(private afs: AngularFirestore) { }

  getNews(){
    return this.afs.collection('news').snapshotChanges()
    .pipe(map(items => {
      return items.map(a => {
        const data = a.payload.doc.data();
        const key = a.payload.doc.id;
        return {key, ...data};
      });
    }));
  }

  createOrUpdateNews(news: News, isUpdate: boolean){
    if(!isUpdate)
      return this.afs.collection('news').add(news)
    else{
      let key = news.key
      delete news[key]
      return this.afs.collection('news').doc(key).set(news)
    }
  }

  deleteNews(news: News){
    return this.afs.collection('news').doc(news.key).delete()
  }

  getFAQs(){
    return this.afs.collection('faqs').snapshotChanges()
    .pipe(map(items => {
      return items.map(a => {
        const data = a.payload.doc.data();
        const key = a.payload.doc.id;
        return {key, ...data};
      });
    }));
  }

  createOrUpdateFAQs(faq: FAQ, isUpdate: boolean){
    if(!isUpdate)
      return this.afs.collection('faqs').add(faq)
    else{
      let key = faq.key
      delete faq[key]
      return this.afs.collection('faqs').doc(key).set(faq)
    }
  }

  deleteFAQs(faq: FAQ){
    return this.afs.collection('nefaqsws').doc(faq.key).delete()
  }

}

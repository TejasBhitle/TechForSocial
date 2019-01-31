import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { News } from './news/news';

import { map } from 'rxjs/operators'
import { FAQ } from './faq/faq';
import { Project } from './project/project'


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
      }).sort( (a1,a2) => (a1["index"] < a2["index"])?-1:1 )
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
      }).sort( (a1,a2) => (a1["index"] < a2["index"])?-1:1 );
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
    return this.afs.collection('faqs').doc(faq.key).delete()
  }

  getProjects(){
    return this.afs.collection('projects').snapshotChanges()
    .pipe(map(items => {
      return items.map(a => {
        const data = a.payload.doc.data();
        const key = a.payload.doc.id;
        return {key, ...data};
      }).sort( (a1,a2) => (a1["index"] < a2["index"])?-1:1 );
    }));
  }

  getProject(slug: string){
    return this.afs.collection('projects').doc(slug).get()
  }

  createOrUpdateProject(project: Project, isUpdate: boolean){
    if(!isUpdate)
      return this.afs.collection('projects').add(project)
    else{
      let key = project.key
      delete project[key]
      return this.afs.collection('projects').doc(key).set(project)
    }
  }

  deleteProject(project: Project){
    return this.afs.collection('projects').doc(project.key).delete()
  }

  getPublications(){
    return this.afs.collection('publications').snapshotChanges()
    .pipe(map(items => {
      return items.map(a => {
        const data = a.payload.doc.data();
        const key = a.payload.doc.id;
        return {key, ...data};
      })
    }));
  }

}

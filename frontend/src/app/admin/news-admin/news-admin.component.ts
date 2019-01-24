import { Component, OnInit } from '@angular/core';
import { News } from 'src/app/news/news';
import { NgForm } from '@angular/forms';
import { FirebaseDbService } from 'src/app/firebase-db.service';

@Component({
  selector: 'app-news-admin',
  templateUrl: './news-admin.component.html',
  styleUrls: ['./news-admin.component.css']
})
export class NewsAdminComponent implements OnInit {

  isUpdateMode: boolean = false
  isWriteView$: boolean = false
  news= []
  newsItem$ : News = {key: '', text:'' }

  constructor(private firebaseDb: FirebaseDbService) { }

  ngOnInit() {
    this.fetchNews()
  }

  onEditPressed(newsItem: News){
    this.isWriteView$ = true
    this.isUpdateMode = true
    this.newsItem$ = newsItem
  }

  onCreatePressed(){
    this.isWriteView$ = true
    this.isUpdateMode = false
    this.resetFormItem()
  }

  onDeletePressed(newsItem: News){
    if(!confirm("Are you sure you want to delete this news ?")) return
    this.firebaseDb.deleteNews(newsItem)
    this.goToReadView()
  }
  
  onCancelPressed(){
    if(this.isWriteView$ == false) return;
    this.resetFormItem()
    this.goToReadView()
  }

  submitForm(form: NgForm){
    let formNews : News = form.value
    if(this.isUpdateMode) formNews.key = this.newsItem$.key
    this.firebaseDb.createOrUpdateNews(formNews,this.isUpdateMode)
    this.goToReadView()
  }

  private fetchNews(){
    this.firebaseDb.getNews().subscribe(
      value => this.news = value
    );
  }

  private goToReadView(){
    this.isWriteView$ = false
    this.fetchNews()
  }

  private resetFormItem(){
    this.newsItem$ = {key: '', text:'' }
  }

}

import { Component, OnInit } from '@angular/core';
import { News } from 'src/app/news/news';
import { APIService } from 'src/app/api.service';
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
  newsItem$ : News = {text:'' }

  constructor(private apiService: APIService, private firebaseDb: FirebaseDbService) { }

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
    this.apiService.deleteNews(newsItem).subscribe(
      res => console.log(res), 
      err => console.log(err)
    )
    this.goToReadView()
  }
  
  onCancelPressed(){
    if(this.isWriteView$ == false) return;
    this.resetFormItem()
    this.goToReadView()
  }

  submitForm(form: NgForm){
    let formNews : News = form.value
    /*this.apiService.createOrUpdateNews(formNews,this.isUpdateMode)
      .subscribe( res => console.log(res), err => console.log(err))*/
    this.firebaseDb.createNews(formNews)
    this.goToReadView()
  }

  private fetchNews(){
    this.firebaseDb.getNews()/*.valueChanges().subscribe(
      value => {
        this.news = value
        console.log(value) 
      }
    );*/
  }

  private goToReadView(){
    this.isWriteView$ = false
    this.fetchNews()
  }

  private resetFormItem(){
    this.newsItem$ = {text:'' }
  }

}

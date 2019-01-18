import { Component, OnInit } from '@angular/core';
import { News } from 'src/app/news/news';
import { APIService } from 'src/app/api.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-news-admin',
  templateUrl: './news-admin.component.html',
  styleUrls: ['./news-admin.component.css']
})
export class NewsAdminComponent implements OnInit {

  isUpdateMode: boolean = false
  isWriteView$: boolean = false
  news: News[] = []
  newsItem$ : News = { id:'', text:'' }

  constructor(private apiService: APIService) { }

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
    formNews.id = this.newsItem$.id
    this.apiService.createOrUpdateNews(formNews,this.isUpdateMode)
      .subscribe( res => console.log(res), err => console.log(err))
    this.goToReadView()
  }

  private fetchNews(){
    this.apiService.getNews().subscribe( (res) => {
      this.news = JSON.parse(JSON.stringify(res))
    })
  }

  private goToReadView(){
    this.isWriteView$ = false
    this.fetchNews()
  }

  private resetFormItem(){
    this.newsItem$ = { id:'', text:'' }
  }

}

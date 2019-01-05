import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import { News } from './news/news';

@Injectable({
  providedIn: 'root'
})
export class APIService {

  BASE_URL = "http://127.0.0.1:8000"

  constructor(private http: HttpClient) { }

  getNews(){
    return this.http.get(this.BASE_URL+'/updates/news/')
  }

  createOrUpdateNews(news: News, isUpdateMode: boolean){
    const httpOptions = {
      headers: new HttpHeaders()
    };

    console.log(news)
    console.log(isUpdateMode)

    if(isUpdateMode){
      let id = news.id
      return this.http.put(
        this.BASE_URL+'/updates/news/update/'+id,
        news,
        httpOptions
      )
    }
    else{
      return this.http.post(
        this.BASE_URL+'/updates/news/create/',
        news,
        httpOptions
      )
    }
  }

  deleteNews(news:News){
    return this.http.delete(this.BASE_URL+'/updates/news/delete/'+news.id)
  }

  getFaqs(){
    return this.http.get(this.BASE_URL+'/faqs/')
  }
  
}

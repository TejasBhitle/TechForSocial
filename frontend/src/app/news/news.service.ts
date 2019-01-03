import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BASE_URL } from './../constants';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { 

  }

  getNews(){
    return this.http.get('http://127.0.0.1:8000/updates/news/')
  }
}

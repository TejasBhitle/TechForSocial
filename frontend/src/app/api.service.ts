import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class APIService {

  BASE_URL = "http://127.0.0.1:8000"

  constructor(private http: HttpClient) { }

  getNews(){
    return this.http.get(this.BASE_URL+'/updates/news/')
  }

  getFaqs(){
    return this.http.get(this.BASE_URL+'/faqs/')
  }
  
}

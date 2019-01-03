import { Component, OnInit } from '@angular/core';
import { APIService } from './../api.service'
import { News } from './news'

@Component({
  selector: 'news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit{

  news : News[] = [];

  constructor(private apiService: APIService) { }

  ngOnInit(){
    this.apiService.getNews()
    .subscribe(
      (response) => {
        let data = JSON.stringify(response);
        this.news = JSON.parse(data);
      },
      (error) =>{
        console.log(error);
      }
    )
  }


}

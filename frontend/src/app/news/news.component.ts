import { Component, OnInit } from '@angular/core';
import { NewsService } from './news.service'
import { News } from './news'

@Component({
  selector: 'news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit{

  news : News[] = [];

  constructor(private newsService: NewsService) { }

  ngOnInit(){
    this.newsService.getNews()
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

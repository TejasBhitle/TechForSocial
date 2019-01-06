import { Component, OnInit } from '@angular/core';
import { APIService } from '../api.service';
import { FAQ } from './faq';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {

  faqs : FAQ[] = []

  constructor(private apiService: APIService) { }
  isHidden1 = true;
  isHidden2 = true;
  isHidden3 = true;
  isHidden4 = true;
  isHidden5 = true;
  ngOnInit(){
    this.apiService.getFaqs()
    .subscribe(
      (response) => {
        let data = JSON.stringify(response);
        this.faqs = JSON.parse(data);
      },
      (error) =>{
        console.log(error);
      }
    )
  }

}

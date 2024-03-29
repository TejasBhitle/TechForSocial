import { Component } from '@angular/core';
import {Title} from '@angular/platform-browser'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {

  constructor(private title:Title){ }

  ngOnInit(){
    this.title.setTitle('TechForSocial - Technology for Social Good');
  }
}

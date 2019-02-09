import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  constructor(private title:Title ) { }

  ngOnInit() {
    this.title.setTitle('TechForSocial - People who made it possible');
  }

}

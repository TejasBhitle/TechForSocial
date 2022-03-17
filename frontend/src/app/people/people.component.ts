import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { FirebaseDbService } from '../firebase-db.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  subscription : Subscription
  introtext : String = ''
  showSpinner: boolean = false

  constructor(private firebaseDb: FirebaseDbService, private title:Title ) { }

  ngOnInit() {
    this.title.setTitle('TechForSocial - People who made it possible');
    
    this.showSpinner=true
    this.subscription = this.firebaseDb.getFounderIntro().subscribe(item =>{
        let data = item.data()
        let text = data["bio"]
        console.log(text)
        this.introtext = text
        this.showSpinner=false
    })
  }

  ngOnDestroy(){
    if(this.subscription)
      this.subscription.unsubscribe()
  }

}

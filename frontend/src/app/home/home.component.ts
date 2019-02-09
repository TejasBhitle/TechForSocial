import { Component, OnInit, OnDestroy } from '@angular/core';
import { FirebaseDbService } from '../firebase-db.service';
import { Subscription } from 'rxjs';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  openProjects$ = []
  showSpinner: boolean = false
  subscription: Subscription

  constructor(private firebaseDb: FirebaseDbService,private title :Title) { }

  ngOnInit() {
    this.title.setTitle("TechForSocial - Technology For Social Good")
    let localOpenProjects = sessionStorage.getItem('openProjects')
    if(!localOpenProjects){
      this.showSpinner = true
      this.subscription = this.firebaseDb.getProjects().subscribe( 
        projects =>{
          this.openProjects$ = []
          projects.forEach( project => {
            if(project['isOpen'])
              this.openProjects$.push(project)
          })
          this.showSpinner = false
          this.subscription.unsubscribe()
          sessionStorage.setItem('openProjects', JSON.stringify(this.openProjects$))
        })
    }
    else{
      this.openProjects$ = JSON.parse(localOpenProjects)
    }
  }

  ngOnDestroy(){
    if(this.subscription)
      this.subscription.unsubscribe()
  }

}

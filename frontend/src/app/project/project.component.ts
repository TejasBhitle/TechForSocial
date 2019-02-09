import { Component, OnInit, OnDestroy } from '@angular/core';
import { FirebaseDbService } from '../firebase-db.service';
import { Subscription } from 'rxjs';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit, OnDestroy {

  openProjects$ = []
  closedProjects$ = []
  subscription : Subscription
  showSpinner: boolean = false

  constructor(private firebaseDb: FirebaseDbService, private title :Title) { }

  ngOnInit() {
    this.title.setTitle("TechForSocial - Projects which transformed Everything")
    let localOpenProjects = sessionStorage.getItem('openProjects')
    let localClosedProjects = sessionStorage.getItem('closedProjects')
    if(!localClosedProjects){
      this.showSpinner = true
      this.subscription = this.firebaseDb.getProjects().subscribe( 
        projects =>{
          this.openProjects$ = []
          this.closedProjects$ = []
          projects.forEach( project => {
            if(project['isOpen'])
              this.openProjects$.push(project)
            else
              this.closedProjects$.push(project)
          })
          this.showSpinner = false
          this.subscription.unsubscribe()
          console.log("caching projects")
          sessionStorage.setItem('openProjects',JSON.stringify(this.openProjects$))
          sessionStorage.setItem('closedProjects',JSON.stringify(this.closedProjects$))
        })
    }
    else{
      this.openProjects$ = JSON.parse(localOpenProjects)
      this.closedProjects$ = JSON.parse(localClosedProjects)
    }
    
  }

  ngOnDestroy(){
    if(this.subscription)
      this.subscription.unsubscribe()
  }


}

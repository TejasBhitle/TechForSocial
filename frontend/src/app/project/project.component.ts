import { Component, OnInit, OnDestroy } from '@angular/core';
import { FirebaseDbService } from '../firebase-db.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit, OnDestroy {

  openProjects$ = []
  closedProjects$ = []
  subscription : Subscription

  constructor(private firebaseDb: FirebaseDbService) { }

  ngOnInit() {
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
        this.subscription.unsubscribe()
      })
  }

  ngOnDestroy(){
    if(this.subscription)
      this.subscription.unsubscribe()
  }


}

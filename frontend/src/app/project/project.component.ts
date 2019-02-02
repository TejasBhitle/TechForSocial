import { Component, OnInit, OnDestroy } from '@angular/core';
import { FirebaseDbService } from '../firebase-db.service';
import { Subscription } from 'rxjs';

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

  constructor(private firebaseDb: FirebaseDbService) { }

  ngOnInit() {
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
      })
  }

  ngOnDestroy(){
    if(this.subscription)
      this.subscription.unsubscribe()
  }


}

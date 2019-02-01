import { Component, OnInit, OnDestroy } from '@angular/core';
import { FirebaseDbService } from '../firebase-db.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit, OnDestroy {

  openProjects$ = []
  showSpinner: boolean = false
  subscription: Subscription

  constructor(private firebaseDb: FirebaseDbService) { }

  ngOnInit() {
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
      })
  }

  ngOnDestroy(){
    if(this.subscription)
      this.subscription.unsubscribe()
  }

}

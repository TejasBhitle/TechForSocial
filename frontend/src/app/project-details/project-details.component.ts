import { Component, OnInit, OnDestroy } from '@angular/core';
import { FirebaseDbService } from '../firebase-db.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit, OnDestroy {

  project$ = {}
  slug: string
  subscription: Subscription
  showSpinner: boolean = false

  constructor(private firebaseDb: FirebaseDbService, private route: ActivatedRoute) { 
    this.slug = this.route.snapshot.params.slug
  }

  ngOnInit() {
    this.showSpinner = true
    this.subscription = this.firebaseDb.getProject(this.slug)
    .subscribe( item =>{
      this.project$ = item.data()
      this.showSpinner = false
      this.subscription.unsubscribe()
    })
  }
  
  ngOnDestroy(){
    if(this.subscription)
      this.subscription.unsubscribe()
  }

}

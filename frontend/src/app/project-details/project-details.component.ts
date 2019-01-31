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

  constructor(private firebaseDb: FirebaseDbService, private route: ActivatedRoute) { 
    this.slug = this.route.snapshot.params.slug
  }

  ngOnInit() {
    this.subscription = this.firebaseDb.getProject(this.slug)
    .subscribe( item =>{
      this.project$ = item.data()
      this.subscription.unsubscribe()
    })
  }
  
  ngOnDestroy(){
    if(this.subscription)
      this.subscription.unsubscribe()
  }

}

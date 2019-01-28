import { Component, OnInit } from '@angular/core';
import { FirebaseDbService } from '../firebase-db.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit {

  project$ = {}
  slug: string

  constructor(private firebaseDb: FirebaseDbService, private route: ActivatedRoute) { 
    this.slug = this.route.snapshot.params.slug
  }

  ngOnInit() {
    this.firebaseDb.getProject(this.slug)
    .subscribe( item =>{
      this.project$ = item.data()
    })
  }

}

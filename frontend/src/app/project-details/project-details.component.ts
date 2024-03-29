import { Component, OnInit, OnDestroy } from '@angular/core';
import { FirebaseDbService } from '../firebase-db.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Project } from '../project/project';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit, OnDestroy {

  project$: Project = new Project()
  slug: string
  subscription: Subscription
  showSpinner: boolean = false

  constructor(private firebaseDb: FirebaseDbService, private route: ActivatedRoute,private title:Title) { 
    this.slug = this.route.snapshot.params.slug
  }

  ngOnInit() {
    this.title.setTitle("TechForSocial - "+this.slug)
    let localProject = sessionStorage.getItem('project/'+this.slug)
    if(!localProject){
      this.showSpinner = true
      this.subscription = this.firebaseDb.getProject(this.slug)
      .subscribe( item =>{
        let data = item.data()
        let project = new Project() 
        project.key = data["key"]
        project.name = data["name"]
        project.abstract = data["abstract"]
        project.index = data["index"]
        project.isOpen = data["isOpen"]
        project.papers = data["papers"]
        project.slug = data["slug"]
        project.team = data["team"]
        project.keywords = data["keywords"]
        project.logo = data["logo"]
        project.description = data["description"]
        this.project$ = project
        this.showSpinner = false
        this.subscription.unsubscribe()
        sessionStorage.setItem('project/'+this.slug,JSON.stringify(project))
      })
    }
    else{
      this.project$ = JSON.parse(localProject)
    }
    
  }
  
  ngOnDestroy(){
    if(this.subscription)
      this.subscription.unsubscribe()
  }

}

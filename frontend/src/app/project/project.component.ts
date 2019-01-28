import { Component, OnInit } from '@angular/core';
import { FirebaseDbService } from '../firebase-db.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  openProjects$ = []
  closedProjects$ = []

  constructor(private firebaseDb: FirebaseDbService) { }

  ngOnInit() {
    this.firebaseDb.getProjects().subscribe( 
      projects =>{
        this.openProjects$ = []
        this.closedProjects$ = []
        projects.forEach( project => {
          if(project['isOpen'])
            this.openProjects$.push(project)
          else
            this.closedProjects$.push(project)
        })
        console.log(this.openProjects$)
      })
  }

}

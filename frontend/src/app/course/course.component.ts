import { Component, OnInit } from '@angular/core';
import { FirebaseDbService } from '../firebase-db.service';

@Component({
  selector: 'course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  openProjects$ = []

  constructor(private firebaseDb: FirebaseDbService) { }

  ngOnInit() {
    this.firebaseDb.getProjects().subscribe( 
      projects =>{
        this.openProjects$ = []
        projects.forEach( project => {
          if(project['isOpen'])
            this.openProjects$.push(project)
        })
      })
  }

}

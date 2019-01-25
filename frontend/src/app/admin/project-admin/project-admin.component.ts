import { Component, OnInit } from '@angular/core';
import { Project } from './../../project/project'
import { NgForm } from '@angular/forms';
import { FirebaseDbService } from 'src/app/firebase-db.service';

@Component({
  selector: 'app-project-admin',
  templateUrl: './project-admin.component.html',
  styleUrls: ['./project-admin.component.css']
})
export class ProjectAdminComponent implements OnInit {

  isUpdateMode: boolean = false
  isWriteView$: boolean = false
  projects= []
  projectItem$ : Project = { key:'', abstract: '', name: '',team:'', paper: []}

  constructor(private firebaseDb: FirebaseDbService) { }

  ngOnInit() {
    this.fetchProjects()
  }

  onEditPressed(project: Project){
    this.isWriteView$ = true
    this.isUpdateMode = true
    this.projectItem$ = project
  }

  onCreatePressed(){
    this.isWriteView$ = true
    this.isUpdateMode = false
    this.resetFormItem()
  }

  onDeletePressed(project: Project){
    if(!confirm("Are you sure you want to delete this Project ?")) return
    this.firebaseDb.deleteProject(project)
    this.goToReadView()
  }
  
  onCancelPressed(){
    if(this.isWriteView$ == false) return;
    this.resetFormItem()
    this.goToReadView()
  }

  submitForm(form: NgForm){
    let formProject : Project = form.value
    if(this.isUpdateMode) formProject.key = this.projectItem$.key
    this.firebaseDb.createOrUpdateProject(formProject,this.isUpdateMode)
    this.goToReadView()
  }

  private fetchProjects(){
    this.firebaseDb.getProjects().subscribe(
      value => this.projects = value
    );
  }

  private goToReadView(){
    this.isWriteView$ = false
    this.fetchProjects()
  }

  private resetFormItem(){
    this.projectItem$ = { key:'', abstract: '', name: '',team:'', paper: []}
  }

}

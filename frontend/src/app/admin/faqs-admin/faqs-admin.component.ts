import { Component, OnInit } from '@angular/core';
import { FAQ } from './../../faq/faq';
import { NgForm } from '@angular/forms';
import { FirebaseDbService } from 'src/app/firebase-db.service';

@Component({
  selector: 'app-faqs-admin',
  templateUrl: './faqs-admin.component.html',
  styleUrls: ['./faqs-admin.component.css']
})
export class FaqsAdminComponent implements OnInit {

  isUpdateMode: boolean = false
  isWriteView$: boolean = false
  faqs= []
  faqItem$ : FAQ

  constructor(private firebaseDb: FirebaseDbService) { }

  ngOnInit() {
    this.fetchFAQs()
  }

  onEditPressed(faq: FAQ){
    this.isWriteView$ = true
    this.isUpdateMode = true
    this.faqItem$ = faq
  }

  onCreatePressed(){
    this.isWriteView$ = true
    this.isUpdateMode = false
    this.resetFormItem()
  }

  onDeletePressed(faq: FAQ){
    if(!confirm("Are you sure you want to delete this FAQ ?")) return
    this.firebaseDb.deleteFAQs(faq)
    this.goToReadView()
  }
  
  onCancelPressed(){
    if(this.isWriteView$ == false) return;
    this.resetFormItem()
    this.goToReadView()
  }

  submitForm(form: NgForm){
    let formFAQ : FAQ = form.value
    if(this.isUpdateMode) formFAQ.key = this.faqItem$.key
    this.firebaseDb.createOrUpdateFAQs(formFAQ,this.isUpdateMode)
    this.goToReadView()
  }

  private fetchFAQs(){
    this.firebaseDb.getFAQs().subscribe(
      value => this.faqs = value
    );
  }

  private goToReadView(){
    this.isWriteView$ = false
    this.fetchFAQs()
  }

  private resetFormItem(){
    this.faqItem$ = { key:'', question: '', answer: '', index: 0}
  }

}

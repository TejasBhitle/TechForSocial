import { Component, OnInit } from '@angular/core';
import { FAQ } from 'src/app/faq/faq';
import { APIService } from 'src/app/api.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-faqs-admin',
  templateUrl: './faqs-admin.component.html',
  styleUrls: ['./faqs-admin.component.css']
})
export class FaqsAdminComponent implements OnInit {

  isUpdateMode: boolean = false
  isWriteView$: boolean = false
  faqs: FAQ[] = []
  faqItem$ : FAQ = { question: '', answer: '' }

  constructor(private apiService: APIService) { }

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
    this.apiService.deleteFAQ(faq).subscribe(
      res => console.log(res), 
      err => console.log(err)
    )
    this.goToReadView()
  }
  
  onCancelPressed(){
    if(this.isWriteView$ == false) return;
    this.resetFormItem()
    this.goToReadView()
  }

  submitForm(form: NgForm){
    let formFAQ : FAQ = form.value
    formFAQ.id = this.faqItem$.id
    this.apiService.createOrUpdateFAQ(formFAQ,this.isUpdateMode)
      .subscribe( res => console.log(res), err => console.log(err))
    this.goToReadView()
  }

  private fetchFAQs(){
    this.apiService.getFaqs().subscribe( (res) => {
      this.faqs = JSON.parse(JSON.stringify(res))
    })
  }

  private goToReadView(){
    this.isWriteView$ = false
    this.fetchFAQs()
  }

  private resetFormItem(){
    this.faqItem$ = { question: '', answer: ''}
  }

}

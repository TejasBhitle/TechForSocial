import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  
  routerSubscription : Subscription
  showFooter$ : boolean

  constructor(private router: Router) { }

  ngOnInit() {
    this.routerSubscription = this.router.events.subscribe( 
      (data) => {
        if(data instanceof NavigationEnd) 
          this.showFooter$ = !(data.url.startsWith('/admin')) 
        })
}

  ngOnDestroy(){
    this.routerSubscription.unsubscribe()
  }

}

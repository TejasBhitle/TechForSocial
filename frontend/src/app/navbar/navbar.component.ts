import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy {

  routerSubscription : Subscription
  showNavbar$ : boolean

  constructor(private router: Router) { }

  ngOnInit() {
    
    document.addEventListener('DOMContentLoaded', function() {
      var elems1 = document.querySelectorAll('.sidenav');
      M.Sidenav.init(elems1, {});
    });

    this.routerSubscription = this.router.events.subscribe( 
      (data) => {
        if(data instanceof NavigationEnd) 
          this.showNavbar$ = !(data.url.startsWith('/admin')) 
        }
    )
  }

  ngOnDestroy(){
    this.routerSubscription.unsubscribe()
  }

}

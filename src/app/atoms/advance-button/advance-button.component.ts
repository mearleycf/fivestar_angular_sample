import { PagesCoveragesComponent } from './../../pages/coverages/coverages.component';
import { AppRoutingModule } from './../../app-routing/app-routing.module';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-advance-button',
  templateUrl: './advance-button.component.html',
  styleUrls: ['./advance-button.component.scss'],
})
export class AdvanceButtonComponent implements OnInit {

  @Input() navigateTo: any;
  @Input() buttonText: string;

  redirect(pagename: string) {
    pagename = this.navigateTo;
    this.router.navigate(['/' + pagename]);
  }

  constructor(private router: Router) {
    // scroll to top on route change
    this.router.events.subscribe( () => window.scrollTo( 0, 0 ) );
   }

  ngOnInit() {
  }

}

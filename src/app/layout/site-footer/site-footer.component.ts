import { Component, OnInit } from '@angular/core';
import { navRoutes } from '../../app-routing.module';   // todo: make this a service?

@Component({
  selector: 'app-site-footer',
  templateUrl: './site-footer.component.html',
  styleUrls: ['./site-footer.component.scss']
})
export class SiteFooterComponent implements OnInit {

  _navRoutes: object;

  constructor() { 
    this._navRoutes = navRoutes;
  }

  ngOnInit() {
  }

}

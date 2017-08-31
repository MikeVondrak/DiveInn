import { Component, OnInit, DoCheck } from '@angular/core';
import { navRoutes } from '../../app-routing.module';

@Component({
  selector: 'app-nav-main',
  templateUrl: './nav-main.component.html',
  styleUrls: ['./nav-main.component.scss']
})
export class NavMainComponent implements OnInit, DoCheck {

  _navRoutes: any[];
  myRoutes: any[];

  constructor() {
    this._navRoutes = navRoutes;
    this.myRoutes = this._navRoutes;
  }

  ngOnInit() {
  }

  ngDoCheck() {
    console.log("ngDoCheck: " + this._navRoutes.length);
    this.myRoutes = this._navRoutes;
  }

}

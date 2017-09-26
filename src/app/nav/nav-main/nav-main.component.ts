import { Component, OnInit, DoCheck } from '@angular/core';
import { navRoutes } from '../../app-routing.module';
import { Router, NavigationEnd } from "@angular/router";
import 'rxjs/add/operator/filter'

@Component({
  selector: 'app-nav-main',
  templateUrl: './nav-main.component.html',
  styleUrls: ['./nav-main.component.scss']
})
export class NavMainComponent implements OnInit, DoCheck {

  _navRoutes;
  _router: Router;
  _currentPage: String;
  _showOverlayNav: boolean = false;
  
  constructor(private router:Router) {
    this._navRoutes = navRoutes;
    this._router = router;

    router.events.filter(event => event instanceof NavigationEnd).subscribe((event: NavigationEnd) => {
      this.updatePageTitle();
    });


    //this.updatePageTitle();
  }

  ngOnInit() {
  }

  ngDoCheck() {
    //console.log("ngDoCheck - navRoutes length: " + this._navRoutes.length);
   
    // todo: best place for this (angular lifecycle)?
    // todo: expand angular routes object instead of using _navRoutes
    //this.updatePageTitle();
  }
  
  private updatePageTitle(): void {
    console.log("update page title - router url: " + this._router.url);
    //debugger;
    let self = this;
    this._navRoutes.forEach(nr => {
      //console.log("nr: " + nr.routeStr + " - url: " + self._router.url);
      if(self._router.url.indexOf(nr.routeStr) >= 0) {
          self._currentPage = nr.display;
          console.log("setting page: " + nr.routeStr);
      }
    });
    //console.log("page title: " + this._currentPage);
  }

  public toggleOverlayNav() {
    this._showOverlayNav = !this._showOverlayNav;
  }
  public noToggle(event: any) {
    event.stopPropagation();
    console.log("no toggle: " + event);
  }
}

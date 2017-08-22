import { Component, OnInit, Input, ElementRef } from '@angular/core';

@Component({
  selector: 'app-in-page-nav',
  templateUrl: './in-page-nav.component.html',
  styleUrls: ['./in-page-nav.component.scss']
})
export class InPageNavComponent implements OnInit {

  @Input() routeFragmentTextPairs: any[] = [];

  constructor() { }

  ngOnInit() {
  }

  scrollToElementWithId(id: string): void {
    //alert("scrollToElementWithId: " + id);
    const element = document.querySelector("#" + id);    
    if (element) { 
      // todo: does not work, scroll already occurs from browser?
      element.scrollIntoView({behavior:'smooth'});
    }
  }

}

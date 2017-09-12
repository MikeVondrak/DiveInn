import { Component, OnInit, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'app-content-layout-2col',
  templateUrl: './content-layout-2col.component.html',
  styleUrls: ['./content-layout-2col.component.scss']
})
export class ContentLayout2ColComponent implements OnInit {

  // workaround for HostBinding, wrap an additional div around contents and set it to flex display instead of :host
  @Input() flowReverse: boolean = false;
  
  //@HostBinding('class.orderReverse') get flowReverseVal() { return this.flowReverse; }
  //@HostBinding('class.orderReverse') orderReverse: boolean;
  //@HostBinding('class.orderReverse') @Input() flowReverse: boolean;// = false;
  //@Input() @HostBinding('class.orderReverse') flowReverse: boolean;// = false;
  // TODO: DOES NOT WORK

  constructor() {}

  ngOnInit() {
    //this.orderReverse = this.flowReverse;
  }

}

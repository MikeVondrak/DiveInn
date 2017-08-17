import { Component, OnInit, AfterViewInit, Input } from '@angular/core';

@Component({
  selector: 'app-callout',
  templateUrl: './callout.component.html',
  styleUrls: ['./callout.component.scss']
})
export class CalloutComponent implements OnInit, AfterViewInit {

  @Input() title: string = "";
  @Input() copyText: string = "";
  @Input() imgSrc: string = "";    // src for callout img
  @Input() imgAlt: string = "";    // alt

  constructor() { }

  ngOnInit() {
  }
  ngAfterViewInit() {
    console.log("Callout: " + this.title + "  " + this.copyText + "  src=" + this.imgSrc + "  alt=" + this.imgAlt);
  }

}

import { Component, OnInit, AfterViewInit } from '@angular/core';

// service to send 'appReady' event to index.html to remove pre-bootstap loader element
import { AppReadyEvent } from "./app-ready-event";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [AppReadyEvent]
})

export class AppComponent implements OnInit, AfterViewInit {

  appReadyEvent: AppReadyEvent;
  title = 'The Dive Inn';
  delayAppReadyEvent = false;
  appReadyEventDelay = 2000;
  
  constructor(appReady: AppReadyEvent) {
    // called first time before the ngOnInit()
    this.appReadyEvent = appReady;
  }

  ngOnInit() {
    // called after the constructor and called after the first ngOnChanges() 
  }

  ngAfterViewInit() {
    // called once after the first ngAfterContentChecked(), after Angular initializes the component's views and child views
    if(!this.delayAppReadyEvent) {
      this.appReadyEvent.trigger();
      console.log("ngAfterViewInit done");
    } else {
      // simulate load time for app
      console.log("waiting " + this.appReadyEventDelay + "ms to fire appReadyEvent")
      let self = this;
      setTimeout(function() { 
        self.appReadyEvent.trigger();
        console.log("ngAfterViewInit done");
      }, this.appReadyEventDelay);
    }
  }
}

import { BrowserModule }  from '@angular/platform-browser';
import { NgModule }       from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { HttpModule }     from '@angular/http';
import { RouterModule }   from '@angular/router'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent }   from './app.component';

import { Layout1columnComponent } from './layout/layout1column/layout1column.component';
import { Layout3columnsComponent } from './layout/layout3columns/layout3columns.component';
import { SidebarLeftComponent } from './sidebars/sidebar-left/sidebar-left.component';
import { SidebarRightComponent } from './sidebars/sidebar-right/sidebar-right.component';
import { NavMainComponent } from './nav/nav-main/nav-main.component'
import { HomeComponent } from './pages/home/home.component';
import { DiveLogComponent } from './pages/dive-log/dive-log.component';
import { WhatsInsideComponent } from './pages/whats-inside/whats-inside.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    NavMainComponent,
    Layout1columnComponent, 
    Layout3columnsComponent,
    SidebarLeftComponent,
    SidebarRightComponent,
    HomeComponent,
    DiveLogComponent,
    WhatsInsideComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

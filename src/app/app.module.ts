import { BrowserModule }  from '@angular/platform-browser';
import { NgModule }       from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { HttpModule }     from '@angular/http';
import { RouterModule }   from '@angular/router'

import { AppRoutingModule }           from './app-routing.module';
import { AppComponent }               from './app.component';
import { HeaderComponent }            from './layout/header/header.component';
import { FooterComponent }            from './layout/footer/footer.component';

// test layout with no header/footer and 1 column
import { Layout1columnComponent }     from './layout/layout1column/layout1column.component';

// primary layout is responsive 3 columns, collapses to single column with sidebars below main content
import { Layout3columnsComponent }    from './layout/layout3columns/layout3columns.component';
import { SidebarLeftComponent }       from './sidebars/sidebar-left/sidebar-left.component';
import { SidebarRightComponent }      from './sidebars/sidebar-right/sidebar-right.component';

// nav is part of center column for primary layout
// todo: collapse to mobile menu
import { NavMainComponent }           from './nav/nav-main/nav-main.component'

// pages
import { HomeComponent }              from './pages/home/home.component';
import { DiveLogComponent }           from './pages/dive-log/dive-log.component';
import { WhatsInsideComponent }       from './pages/whats-inside/whats-inside.component';
import { ContentBoxComponent } from './pages/shared/content-box/content-box.component';
import { CalloutComponent } from './sidebars/callout/callout.component';
import { ContentLayoutComponent } from './pages/shared/content-layout/content-layout.component';

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
    WhatsInsideComponent,
    HeaderComponent,
    FooterComponent,
    ContentBoxComponent,
    CalloutComponent,
    ContentLayoutComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule }  from '@angular/platform-browser';
import { NgModule }       from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { HttpModule }     from '@angular/http';

import { AppRoutingModule }           from './app-routing.module';
import { AppComponent }               from './app.component';
import { NgIfMediaQuery }             from './directives/angular2-if-media-query.directive';

import { SiteHeaderComponent }        from './layout/site-header/site-header.component';
import { SiteFooterComponent }        from './layout/site-footer/site-footer.component';

// test layout with no header/footer and 1 column
import { Layout1columnComponent }     from './layout/layout1column/layout1column.component';

// primary layout is responsive 3 columns, collapses to single column with sidebars below main content
import { Layout3columnsComponent }    from './layout/layout3columns/layout3columns.component';

// todo: single sidebar w/variable contents
import { SidebarLeftComponent }       from './sidebars/sidebar-left/sidebar-left.component';
import { SidebarRightComponent }      from './sidebars/sidebar-right/sidebar-right.component';

// nav is part of center column for primary layout
// todo: collapse to mobile menu
import { NavMainComponent }           from './nav/nav-main/nav-main.component'

// pages
import { HomeComponent }              from './pages/home/home.component';
import { DiveLogComponent }           from './pages/dive-log/dive-log.component';
import { WhatsInsideComponent }       from './pages/whats-inside/whats-inside.component';
import { ContentBoxComponent }        from './pages/shared/content-box/content-box.component';
import { CalloutComponent }           from './sidebars/callout/callout.component';
import { ContentLayout2ColComponent }     from './pages/shared/content-layouts/content-layout-2col/content-layout-2col.component';

import { NotFoundComponent }          from './pages/not-found/not-found.component';

// todo: remove?
import { TextSectionComponent }       from './pages/shared/content-sections/text-section/text-section.component';
import { InPageNavComponent }         from './nav/in-page-nav/in-page-nav.component';

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
    SiteHeaderComponent,
    SiteFooterComponent,
    ContentBoxComponent,
    CalloutComponent,
    ContentLayout2ColComponent,
    NotFoundComponent,
    NgIfMediaQuery,
    TextSectionComponent,
    InPageNavComponent
  ],
  providers: [NgIfMediaQuery],
  bootstrap: [AppComponent]
})
export class AppModule { }

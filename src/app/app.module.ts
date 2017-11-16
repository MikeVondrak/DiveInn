import { BrowserModule }  from '@angular/platform-browser';
import { NgModule }       from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { HttpModule }     from '@angular/http';

import { AppRoutingModule }           from './app-routing.module';
import { AppComponent }               from './app.component';

// services
import { FlickrService }              from './services/flickr.service';
import { PhotoService }               from './services/photo.service';

// ngIfMediaQuery for responsive selector
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

// main nav is part of center column for primary layout
import { NavMainComponent }           from './nav/nav-main/nav-main.component'

// page content layouts
import { ContentLayout2ColComponent } from './pages/shared/content-layouts/content-layout-2col/content-layout-2col.component';

// page shared components
import { ContentBoxComponent }        from './pages/shared/content-box/content-box.component';
import { TextSectionComponent }       from './pages/shared/content-sections/text-section/text-section.component';
import { ImageSectionComponent }      from './pages/shared/content-sections/image-section/image-section.component';
import { InPageNavComponent }         from './nav/in-page-nav/in-page-nav.component';
import { CalloutComponent }           from './sidebars/callout/callout.component';

// pages
import { NotFoundComponent }          from './pages/not-found/not-found.component';
import { HomeComponent }              from './pages/home/home.component';
import { DiveLogComponent }           from './pages/dive-log/dive-log.component';
import { WhatsInsideComponent }       from './pages/whats-inside/whats-inside.component';
import { SpecialsComponent }          from './pages/specials/specials.component';
import { GalleyComponent }            from './pages/galley/galley.component';
import { GalleryComponent }           from './pages/gallery/gallery.component';
import { PadiClubComponent }          from './pages/padi-club/padi-club.component';
import { DiveShopComponent }          from './pages/dive-shop/dive-shop.component';
import { DiveBuddyComponent }         from './pages/dive-buddy/dive-buddy.component';
import { DiveNewsComponent }          from './pages/dive-news/dive-news.component';
import { ChartersComponent }          from './pages/charters/charters.component';
import { FindUsComponent }            from './pages/find-us/find-us.component';

import { LiveCamsComponent }          from './pages/live-cams/live-cams.component';
import { BoatComponent }              from './pages/live-cams/boat/boat.component';
import { SunsetComponent }            from './pages/live-cams/sunset/sunset.component';

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
    InPageNavComponent,
    ImageSectionComponent,
    SpecialsComponent,
    GalleyComponent,
    GalleryComponent,
    PadiClubComponent,
    DiveShopComponent,
    DiveBuddyComponent,
    DiveNewsComponent,
    ChartersComponent,
    FindUsComponent,
    LiveCamsComponent,
    BoatComponent,
    SunsetComponent
  ],
  providers: [NgIfMediaQuery, FlickrService, PhotoService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule, AfterViewChecked, OnDestroy }       from '@angular/core';
import { RouterModule, Router, Routes, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs/Rx';

import { Layout1columnComponent }   from './layout/layout1column/layout1column.component';
import { Layout3columnsComponent }  from './layout/layout3columns/layout3columns.component';
import { SidebarLeftComponent }     from './sidebars/sidebar-left/sidebar-left.component';
import { SidebarRightComponent }    from './sidebars/sidebar-right/sidebar-right.component';
import { NavMainComponent }         from './nav/nav-main/nav-main.component'

import { NotFoundComponent }        from './pages/not-found/not-found.component';

import { HomeComponent }            from './pages/home/home.component';
import { DiveLogComponent }         from './pages/dive-log/dive-log.component';
import { WhatsInsideComponent }     from './pages/whats-inside/whats-inside.component';
import { SpecialsComponent }        from './pages/specials/specials.component';
import { GalleyComponent }          from './pages/galley/galley.component';
import { GalleryComponent }         from './pages/gallery/gallery.component';
import { PadiClubComponent }        from './pages/padi-club/padi-club.component';
import { DiveShopComponent }        from './pages/dive-shop/dive-shop.component';
import { DiveBuddyComponent }       from './pages/dive-buddy/dive-buddy.component';
import { DiveNewsComponent }        from './pages/dive-news/dive-news.component';
import { ChartersComponent }        from './pages/charters/charters.component';
import { FindUsComponent }          from './pages/find-us/find-us.component';

import { LiveCamsComponent }        from "./pages/live-cams/live-cams.component";
import { BoatComponent }            from './pages/live-cams/boat/boat.component';
import { SunsetComponent }          from './pages/live-cams/sunset/sunset.component';


const routes: Routes = [
    {
        path: "Home",
        component: Layout3columnsComponent,
        children: [
            {   path: "", component: HomeComponent  },
            {   path: "", component: SidebarLeftComponent, outlet: "sidebar1" },
            {   path: "", component: SidebarRightComponent, outlet: "sidebar2" }
        ]
    },
    { 
        path: "DiveLog", 
        component: Layout3columnsComponent,
        children: [
            {   path: "", component: DiveLogComponent },
            {   path: "", component: SidebarLeftComponent, outlet: "sidebar1" },
            {   path: "", component: SidebarRightComponent, outlet: "sidebar2" }
        ]
    },
    { 
        path: "WhatsInside", 
        component: Layout3columnsComponent,
        children: [
            {   path: "", component: WhatsInsideComponent },
            {   path: "", component: SidebarRightComponent, outlet: "sidebar1" },
            {   path: "", component: SidebarLeftComponent, outlet: "sidebar2" }
        ]
    },
    { 
        path: "Specials", 
        component: Layout3columnsComponent,
        children: [
            {   path: "", component: SpecialsComponent },
            {   path: "", component: SidebarLeftComponent, outlet: "sidebar1" },
            {   path: "", component: SidebarRightComponent, outlet: "sidebar2" }
        ]
    },
    { 
        path: "Cluck", 
        component: Layout3columnsComponent,
        children: [
            {   path: "", component: GalleyComponent },
            {   path: "", component: SidebarLeftComponent, outlet: "sidebar1" },
            {   path: "", component: SidebarRightComponent, outlet: "sidebar2" }
        ]
    },
    { 
        path: "PADIClub", 
        component: Layout3columnsComponent,
        children: [
            {   path: "", component: PadiClubComponent },
            {   path: "", component: SidebarLeftComponent, outlet: "sidebar1" },
            {   path: "", component: SidebarRightComponent, outlet: "sidebar2" }
        ]
    },
    { 
        path: "Gallery", 
        component: Layout3columnsComponent,
        children: [
            {   path: "", component: GalleryComponent },
            {   path: "", component: SidebarLeftComponent, outlet: "sidebar1" },
            {   path: "", component: SidebarRightComponent, outlet: "sidebar2" }
        ]
    },
    { 
        path: "DiveShop", 
        component: Layout3columnsComponent,
        children: [
            {   path: "", component: DiveShopComponent },
            {   path: "", component: SidebarLeftComponent, outlet: "sidebar1" },
            {   path: "", component: SidebarRightComponent, outlet: "sidebar2" }
        ]
    },
    { 
        path: "DiveBuddy", 
        component: Layout3columnsComponent,
        children: [
            {   path: "", component: DiveBuddyComponent },
            {   path: "", component: SidebarLeftComponent, outlet: "sidebar1" },
            {   path: "", component: SidebarRightComponent, outlet: "sidebar2" }
        ]
    },
    { 
        path: "DiveNews", 
        component: Layout3columnsComponent,
        children: [
            {   path: "", component: DiveNewsComponent },
            {   path: "", component: SidebarLeftComponent, outlet: "sidebar1" },
            {   path: "", component: SidebarRightComponent, outlet: "sidebar2" }
        ]
    },
    { 
        path: "Charters", 
        component: Layout3columnsComponent,
        children: [
            {   path: "", component: ChartersComponent },
            {   path: "", component: SidebarLeftComponent, outlet: "sidebar1" },
            {   path: "", component: SidebarRightComponent, outlet: "sidebar2" }
        ]
    },
    { 
        path: "FindUs", 
        component: Layout3columnsComponent,
        children: [
            {   path: "", component: FindUsComponent },
            {   path: "", component: SidebarLeftComponent, outlet: "sidebar1" },
            {   path: "", component: SidebarRightComponent, outlet: "sidebar2" }
        ]
    },
    { 
        path: "LiveCams", 
        component: Layout3columnsComponent,
        children: [
            {   path: "", component: LiveCamsComponent,
                children: [
                    {   path: "Boat", component: BoatComponent },
                    {   path: "Sunset", component: SunsetComponent }
                ] },
            {   path: "", component: SidebarLeftComponent, outlet: "sidebar1" },
            {   path: "", component: SidebarRightComponent, outlet: "sidebar2" }
        ]
    },
    {   path: "", redirectTo: "/Home", pathMatch: "full" },
    {   path: "**", redirectTo: "/Home" }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})

export class AppRoutingModule implements AfterViewChecked, OnDestroy {
    
    // fix in-page anchor links scroll to element in doc
    private subscription: Subscription;
    constructor(router:Router) {
        this.subscription = router.events.subscribe(s => {
            console.log("Router event: " + s.toString);
            if (s instanceof NavigationEnd) {
                const tree = router.parseUrl(router.url);
                if (tree.fragment) {
                    const element = document.querySelector("#" + tree.fragment);
                    if (element) { 
                        element.scrollIntoView();
                    }
                }
            }
        });
    }
    public ngAfterViewChecked() {
        
    }
    public ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
export const routingComponents = [HomeComponent, DiveLogComponent, WhatsInsideComponent];

// routes for main navigation (signposts)
export type navRoute = Array<{display: string, routeStr: string}>;
export const navRoutes: navRoute = [
                { display: "Home", routeStr: "Home" },
                { display: "Dive Log", routeStr: "DiveLog" },
                { display: "What's Inside", routeStr: "WhatsInside" },
                { display: "Specials", routeStr: "Specials" },
                { display: "Chicken", routeStr: "Cluck" }, //{ display: "Food", routeStr: "WhatsInside" },
                { display: "P.A.D.I. Club", routeStr: "PADIClub" },
                { display: "Sightings", routeStr: "Gallery" }, //{ display: "Photos", routeStr: "WhatsInside" },
                { display: "Dive Shop", routeStr: "DiveShop" },
                //{ display: "Dive Buddy", routeStr: "DiveBuddy" }, 
                { display: "Mobile App", routeStr: "DiveBuddy" },
                { display: "Dive News", routeStr: "DiveNews" },
                { display: "Charters", routeStr: "Charters" }, //{ display: "Reservations", routeStr: "Charters" },
                { display: "Find Us", routeStr: "FindUs" }
            ];
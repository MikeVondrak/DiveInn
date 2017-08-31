import { NgModule, AfterViewChecked, OnDestroy }       from '@angular/core';
import { RouterModule, Router, Routes, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs/Rx';

import { Layout1columnComponent } from './layout/layout1column/layout1column.component';
import { Layout3columnsComponent } from './layout/layout3columns/layout3columns.component';
import { SidebarLeftComponent } from './sidebars/sidebar-left/sidebar-left.component';
import { SidebarRightComponent } from './sidebars/sidebar-right/sidebar-right.component';
import { NavMainComponent } from './nav/nav-main/nav-main.component'
import { HomeComponent } from './pages/home/home.component';
import { DiveLogComponent } from './pages/dive-log/dive-log.component';
import { WhatsInsideComponent } from './pages/whats-inside/whats-inside.component';

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
export type navRoute = Array<{display: string, routeStr: string}>;
export const navRoutes: navRoute = [
                { display: "Home", routeStr: "Home" },
                { display: "Dive Log", routeStr: "DiveLog" },
                { display: "What's Inside", routeStr: "WhatsInside" },
                { display: "Specials", routeStr: "WhatsInside" },
                { display: "Galley", routeStr: "WhatsInside" },
                //{ display: "Food", routeStr: "WhatsInside" },
                { display: "P.A.D.I. Club", routeStr: "WhatsInside" },
                { display: "Gallery", routeStr: "WhatsInside" },
                //{ display: "Photos", routeStr: "WhatsInside" },
                { display: "Dive Shop", routeStr: "WhatsInside" },
                { display: "Dive Buddy", routeStr: "WhatsInside" },
                //{ display: "Mobile App", routeStr: "WhatsInside" },
                { display: "Dive News", routeStr: "WhatsInside" },
                { display: "Charters", routeStr: "WhatsInside" },
                //{ display: "Reservations", routeStr: "WhatsInside" },
                { display: "Find Us", routeStr: "WhatsInside" }
            ];
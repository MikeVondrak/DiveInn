import { NgModule }       from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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

export class AppRoutingModule { }
export const routingComponents = [HomeComponent, DiveLogComponent, WhatsInsideComponent];
export const navRoutes = [
                { display: "Home", routeStr: "Home" },
                { display: "Dive Log", routeStr: "DiveLog" },
                { display: "What's Inside", routeStr: "WhatsInside" }
            ];
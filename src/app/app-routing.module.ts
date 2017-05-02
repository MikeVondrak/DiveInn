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
            {
                path: "",
                component: HomeComponent
            },
            {
                path: "",
                outlet: "leftSidebar",
                component: SidebarLeftComponent
            },
            {
                path: "",
                outlet: "rightSidebar",
                component: SidebarRightComponent
            }
        ]
    },
    { 
        path: "DiveLog", 
        component: Layout1columnComponent,
        children: [
            {
                path: "",
                component: DiveLogComponent
            },
            {
                path: "",
                outlet: "leftSidebar",
                component: SidebarLeftComponent
            },
            {
                path: "",
                outlet: "rightSidebar",
                component: SidebarRightComponent
            }
        ]
    },
    { 
        path: "WhatsInside", 
        component: Layout3columnsComponent,
        children: [
            {
                path: "",
                component: WhatsInsideComponent
            },
            {
                path: "",
                outlet: "leftSidebar",
                component: SidebarLeftComponent
            },
            {
                path: "",
                outlet: "rightSidebar",
                component: SidebarRightComponent
            }
        ]
    },
    { path: "", redirectTo: "/Home", pathMatch: "full" },
    { path: "**", redirectTo: "/Home" }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})

export class AppRoutingModule { }
export const routingComponents = [HomeComponent, DiveLogComponent, WhatsInsideComponent];
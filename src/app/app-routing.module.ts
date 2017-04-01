import { NgModule } from '@angular/core';
import { Route, Routes, RouterModule } from '@angular/router';

import { HomeComponent } from "app/home/home.component";
import { SecondComponent } from "app/second/second.component";
import { Home1Component } from "app/home/home1/home1.component";
import { Home2Component } from "app/home/home2/home2.component";
import { HomeDetailComponent } from "app/home/home-detail/home-detail.component";

const fallbackRoutes: Route = { path: '**', component: HomeComponent };

const appRoutes: Routes = [
    { path: '', component: HomeComponent },   //empty path
    { path: '', redirectTo: '/home', pathMatch: 'full' },   //empty path method2, using redirect
    {
        path: 'home', component: HomeComponent, children: [
            { path: '', redirectTo: "home1", pathMatch: 'full'  },   // Need empty path, redirect /home to /home/home1
            { path: 'home1', component: Home1Component },
            { path: 'home2', component: Home2Component },
            { path: ':id', component: HomeDetailComponent },  // Pass parameter
        ]
    },
    { path: 'second', component: SecondComponent },
    { path: '**', component: HomeComponent },  // default path. ! do NOT put it before other routes
    fallbackRoutes    // Can import route from other file
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes, { useHash: true })],  //PathLocationStrategy is default
    exports: [RouterModule]
})
export class AppRoutingModule { }
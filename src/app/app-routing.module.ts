import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from "app/home/home.component";
import { SecondComponent } from "app/second/second.component";

const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'second', component: SecondComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
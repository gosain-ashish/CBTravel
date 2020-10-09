import { NgModule } from '@angular/core';

import {  RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: "" , redirectTo: '/Home', pathMatch:"full"},
  {path:"Home", component: HomeComponent},
  {path:"Gallary", loadChildren: () => import('./gallary/gallary.module').then(m => m.gallaryModule)},
  {path:"About-us", loadChildren: () => import('./about-us/about-us.module').then(m => m.AboutUsModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: "" , redirectTo: 'home', pathMatch:"full"},
  {path:"home", component: HomeComponent},
  {path:"gallery", loadChildren: () => import('./gallery/gallery.module').then(m => m.GalleryModule)},
  {path:"about-us", loadChildren: () => import('./about-us/about-us.module').then(m => m.AboutUsModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

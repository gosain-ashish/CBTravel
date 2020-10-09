import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { aboutUsComponent } from './about-us.component';

const routes: Routes = [
  {path:"", component: aboutUsComponent}
];

@NgModule({
  declarations: [aboutUsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    aboutUsComponent,
    RouterModule
  ]
})
export class AboutUsModule {

 }

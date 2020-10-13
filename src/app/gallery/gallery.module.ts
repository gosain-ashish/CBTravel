import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryComponent } from './gallery.component';
import { RouterModule, Routes, ActivatedRoute } from '@angular/router';

const routes: Routes = [
    {path:"", component: GalleryComponent}
  ];

@NgModule({
    declarations: [GalleryComponent],
    imports: [CommonModule, RouterModule.forChild(routes)],
    exports: [GalleryComponent,  RouterModule]
})
export class GalleryModule{
    constructor(private state: ActivatedRoute){
    }
}
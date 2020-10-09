import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { gallaryComponent } from './gallary.component';
import { RouterModule, Routes, Router, RouterState, RouterStateSnapshot, ActivatedRoute } from '@angular/router';

const routes: Routes = [
    {path:"", component: gallaryComponent}
  ];

@NgModule({
    declarations: [gallaryComponent],
    imports: [CommonModule, RouterModule.forChild(routes)],
    exports: [gallaryComponent,  RouterModule]
})
export class gallaryModule{
    constructor(private state: ActivatedRoute){
        console.log(state.url);
    }
}
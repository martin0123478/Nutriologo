import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {Obesidad1Component} from './components/obesidad1/obesidad1.component'
const routes: Routes = [{
  path:'',
  component:Obesidad1Component
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Obesidad1HRoutingModule { }

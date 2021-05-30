import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {Obesidad3Component} from './components/obesidad3/obesidad3.component'
const routes: Routes = [{
  path:'',
  component:Obesidad3Component
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Obesidad3HRoutingModule { }

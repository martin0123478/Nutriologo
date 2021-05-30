import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {Obesidad2Component} from './components/obesidad2/obesidad2.component'
const routes: Routes = [{
  path:'',
  component:Obesidad2Component
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Obesidad2MRoutingModule { }

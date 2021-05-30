import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SobrePesoComponent} from './components/sobre-peso/sobre-peso.component'
const routes: Routes = [{
  path:'',
  component:SobrePesoComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SobrePesoMRoutingModule { }

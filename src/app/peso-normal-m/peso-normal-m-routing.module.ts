import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PesoNormalComponent} from './components/peso-normal/peso-normal.component'
const routes: Routes = [{
  path:'',
  component:PesoNormalComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PesoNormalMRoutingModule { }

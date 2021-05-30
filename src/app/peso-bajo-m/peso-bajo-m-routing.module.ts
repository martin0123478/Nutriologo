import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PesoBajoComponent} from './components/peso-bajo/peso-bajo.component'
const routes: Routes = [{
  path:'',
  component:PesoBajoComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PesoBajoMRoutingModule { }

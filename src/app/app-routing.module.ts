import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LayaoutComponent } from './layaout/layaout.component'
const routes: Routes = [
  {
    path:'',
    component:LayaoutComponent,
    children:[
      {
        path:'',
        redirectTo:'home',
        pathMatch:'full'
      },
      {
        path:'home',
        loadChildren: ()=> import('./home/home.module').then(h=>h.HomeModule)

      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

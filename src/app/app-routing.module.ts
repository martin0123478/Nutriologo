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

      },
      {
        path:'peso-bajo-h',
        loadChildren: ()=> import('./peso-bajo-h/peso-bajo-h.module').then(h=>h.PesoBajoHModule)
      },
      {
        path:'peso-bajo-m',
        loadChildren: ()=> import('./peso-bajo-m/peso-bajo-m.module').then(m=>m.PesoBajoMModule)
      },
      {
        path:'peso-normal-h',
        loadChildren:()=> import('./peso-normal-h/peso-normal-h.module').then(p=>p.PesoNormalHModule)
      },
      {
        path:'peso-normal-m',
        loadChildren:()=> import('./peso-normal-m/peso-normal-m.module').then(p=>p.PesoNormalMModule)
      },
      {
        path:'sobre-peso-h',
        loadChildren: ()=> import('./sobre-peso-h/sobre-peso-h.module').then(h=>h.SobrePesoHModule)
      },
      {
        path:'sobre-peso-m',
        loadChildren: ()=> import('./sobre-peso-m/sobre-peso-m.module').then(m=> m.SobrePesoMModule)
      },
      {
        path:'obesidad1-h',
        loadChildren: ()=> import('./obesidad1-h/obesidad1-h.module').then(h=>h.Obesidad1HModule)
      },
      {
        path:'obesidad1-m',
        loadChildren: ()=> import('./obesidad1-m/obesidad1-m.module').then(m=>m.Obesidad1MModule)
      },
      {
        path:'obesidad2-h',
        loadChildren: ()=> import('./obesidad2-h/obesidad2-h.module').then(h=>h.Obesidad2HModule)
      },
      {
        path:'obesidad2-m',
        loadChildren: ()=> import('./obesidad2-m/obesidad2-m.module').then(m=>m.Obesidad2MModule)
      },
      {
        path:'obesidad3-h',
        loadChildren:()=> import('./obesidad3-h/obesidad3-h.module').then(h=>h.Obesidad3HModule)
      },
      {
        path:'obesidad3-m',
        loadChildren: ()=> import('./obesidad3-m/obesidad3-m.module').then(m=>m.Obesidad3MModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

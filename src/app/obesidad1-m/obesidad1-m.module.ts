import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table';

import { Obesidad1MRoutingModule } from './obesidad1-m-routing.module';
import { Obesidad1Component } from './components/obesidad1/obesidad1.component';
import { InformacionComponent } from './components/informacion/informacion.component';
import { DietaComponent } from './components/dieta/dieta.component';
import{SharedModule } from './../shared/shared.module'

@NgModule({
  declarations: [Obesidad1Component, InformacionComponent, DietaComponent],
  imports: [
    CommonModule,
    Obesidad1MRoutingModule,
    SharedModule,
    MatTableModule
  ]
})
export class Obesidad1MModule { }

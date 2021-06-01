import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import { Obesidad3MRoutingModule } from './obesidad3-m-routing.module';
import { Obesidad3Component } from './components/obesidad3/obesidad3.component';
import { InformacionComponent } from './components/informacion/informacion.component';
import { DietaComponent } from './components/dieta/dieta.component';
import {SharedModule} from '../shared/shared.module'

@NgModule({
  declarations: [Obesidad3Component, InformacionComponent, DietaComponent],
  imports: [
    CommonModule,
    Obesidad3MRoutingModule,
    SharedModule,
    MatTableModule
  ]
})
export class Obesidad3MModule { }

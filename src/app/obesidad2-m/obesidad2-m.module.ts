import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import { Obesidad2MRoutingModule } from './obesidad2-m-routing.module';
import { Obesidad2Component } from './components/obesidad2/obesidad2.component';
import { InformacionComponent } from './components/informacion/informacion.component';
import { DietaComponent } from './components/dieta/dieta.component';
import {SharedModule} from '../shared/shared.module'

@NgModule({
  declarations: [Obesidad2Component, InformacionComponent, DietaComponent],
  imports: [
    CommonModule,
    Obesidad2MRoutingModule,
    SharedModule,
    MatTableModule
  ]
})
export class Obesidad2MModule { }

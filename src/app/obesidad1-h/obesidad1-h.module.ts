import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Obesidad1HRoutingModule } from './obesidad1-h-routing.module';
import { Obesidad1Component } from './components/obesidad1/obesidad1.component';
import { InformacionComponent } from './components/informacion/informacion.component';
import { DietaComponent } from './components/dieta/dieta.component';
import {SharedModule} from '../shared/shared.module'

@NgModule({
  declarations: [Obesidad1Component, InformacionComponent, DietaComponent],
  imports: [
    CommonModule,
    Obesidad1HRoutingModule,
    SharedModule
    
  ]
})
export class Obesidad1HModule { }

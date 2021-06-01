import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from '../shared/shared.module'
import { SobrePesoMRoutingModule } from './sobre-peso-m-routing.module';
import { SobrePesoComponent } from './components/sobre-peso/sobre-peso.component';
import { InformacionComponent } from './components/informacion/informacion.component';
import { DietaComponent } from './components/dieta/dieta.component';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [SobrePesoComponent, InformacionComponent, DietaComponent],
  imports: [
    CommonModule,
    SobrePesoMRoutingModule,
    SharedModule,
    MatTableModule
  ]
})
export class SobrePesoMModule { }

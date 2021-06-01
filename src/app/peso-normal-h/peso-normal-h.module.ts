import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import { PesoNormalHRoutingModule } from './peso-normal-h-routing.module';
import { PesoNormalComponent } from './components/peso-normal/peso-normal.component';
import { InformacionComponent } from './components/informacion/informacion.component';
import { DietaComponent } from './components/dieta/dieta.component';
import {SharedModule} from '../shared/shared.module'
@NgModule({
  declarations: [PesoNormalComponent, InformacionComponent, DietaComponent],
  imports: [
    CommonModule,
    PesoNormalHRoutingModule,
    SharedModule,
    MatTableModule
  ]
})
export class PesoNormalHModule { }

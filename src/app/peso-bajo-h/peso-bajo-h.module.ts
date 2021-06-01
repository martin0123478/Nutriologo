import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import { PesoBajoHRoutingModule } from './peso-bajo-h-routing.module';
import { PesoBajoComponent } from './components/peso-bajo/peso-bajo.component';
import { InformacionComponent } from './components/informacion/informacion.component';
import { DietaComponent } from './components/dieta/dieta.component';
import {SharedModule} from '../shared/shared.module'

@NgModule({
  declarations: [PesoBajoComponent, InformacionComponent, DietaComponent],
  imports: [
    CommonModule,
    PesoBajoHRoutingModule,
    SharedModule,
    MatTableModule
  ]
})
export class PesoBajoHModule { }

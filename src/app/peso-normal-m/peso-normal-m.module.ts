import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{ SharedModule} from '../shared/shared.module'
import { PesoNormalMRoutingModule } from './peso-normal-m-routing.module';
import { PesoNormalComponent } from './components/peso-normal/peso-normal.component';
import { InformacionComponent } from './components/informacion/informacion.component';
import { DietaComponent } from './components/dieta/dieta.component';


@NgModule({
  declarations: [PesoNormalComponent, InformacionComponent, DietaComponent],
  imports: [
    CommonModule,
    PesoNormalMRoutingModule,
    SharedModule
  ]
})
export class PesoNormalMModule { }

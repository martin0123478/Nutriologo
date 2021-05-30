import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PacientService} from './services/pacient.service'


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers:[
    PacientService
  ]
})
export class CoreModule { }

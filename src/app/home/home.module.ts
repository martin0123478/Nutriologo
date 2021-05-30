import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components/home/home.component';
import { HeroComponent } from './components/hero/hero.component';
import { ServicesComponent } from './components/services/services.component';
import { FormComponent } from './components/form/form.component';
import{MaterialModule} from '../material/material.module';
import { RecomedationComponent } from './components/recomedation/recomedation.component';
import { CalltoactionComponent } from './components/calltoaction/calltoaction.component'
import{ReactiveFormsModule} from '@angular/forms'
@NgModule({
  declarations: [HomeComponent, HeroComponent, ServicesComponent, FormComponent, RecomedationComponent, CalltoactionComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class HomeModule { }

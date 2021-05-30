import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import{ReactiveFormsModule} from '@angular/forms';
import { HeroHombresComponent } from './components/hero-hombres/hero-hombres.component';
import { HeroMujeresComponent } from './components/hero-mujeres/hero-mujeres.component'

@NgModule({
  declarations: [HeaderComponent, FooterComponent, HeroHombresComponent, HeroMujeresComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports:[
    HeaderComponent, FooterComponent,HeroHombresComponent,HeroMujeresComponent
  ]
})
export class SharedModule { }

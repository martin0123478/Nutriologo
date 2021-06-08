import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators} from '@angular/forms'
import {Router} from '@angular/router'
import {PacientService} from '../../../core/services/pacient.service'
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
form:FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private router:Router,
    private service:PacientService
  ) { 
    
  }

  ngOnInit(): void {
    this.buildForm()
  }
  
  save(event:Event){
    event.preventDefault()
    if(this.form.valid){
      
      const altura:number = this.form.get('altura').value;
      const peso:number = this.form.get('peso').value
      const sexo:string = this.form.get('gender').value
      const imc:number = this.CalcularIMC(altura,peso);
      console.log(imc)
      console.log(this.form.value)
      this.reglas(imc,sexo);
      this.guadarDatos()
  }
  
}

  

  private CalcularIMC(altura:number,peso:number){
    let imc:number=0;
    let imcf;
    imc = peso/(Math.pow(altura,2));
    
    imcf = imc.toFixed(2);
    Number(imcf)
    alert(`Tu indice de masa coorporal es de ${imcf}`)
    return imcf;
  }

  private reglas(imc:number,sexo:string){
    if(imc < 18.5 && sexo==='Masculino'){
      this.router.navigate(['peso-bajo-h'])
    }
     else if(imc < 18.5 && sexo==="Femenino"){
        this.router.navigate(['peso-bajo-m'])
      }
       else if( imc >= 18.5 && imc <= 24.9 && sexo==="Masculino"){
          this.router.navigate(['peso-normal-h'])
        }
         else if( imc >= 18.5 && imc <= 24.9 && sexo=="Femenino"){
            this.router.navigate(['peso-normal-m'])
          }
          else if( imc >= 25.0 && imc <= 29.9 && sexo=="Masculino"){
              this.router.navigate(['sobre-peso-h'])
            }
            else if( imc >= 25.0 && imc <= 29.9 && sexo=="Femenino"){
                this.router.navigate(['sobre-peso-m'])
              }
               else if( imc >= 30.0 && imc <= 34.5 && sexo=="Masculino"){
                  this.router.navigate(['obesidad1-h'])
                }
                 else if( imc >= 30.0 && imc <= 34.5 && sexo=="Femenino"){
                    this.router.navigate(['obesidad1-m'])
                  }
                  else if( imc >= 35.0 && imc <= 39.9 && sexo=="Masculino"){
                      this.router.navigate(['obesidad2-h'])
                    }
                    else if( imc >= 35.0 && imc <= 39.9 && sexo=="Femenino"){
                        this.router.navigate(['obesidad2-m'])
                      }
                      else if( imc > 40 && sexo=="Masculino"){
                          this.router.navigate(['obesidad3-h'])
                        }
                        else if( imc > 40 && sexo=="Femenino"){
                            this.router.navigate(['obesidad3-m'])
                          }
       }
                      
                    

  
  private guadarDatos(){
    const data = this.form.value
    this.service.createPacient(data)
    .subscribe(datos=>{
      console.log(datos)
    })
  }


  private buildForm(){
    this.form = this.formBuilder.group({
      nombre: ['',[Validators.required,Validators.pattern(/^[a-zA-Z]+$/)]],
      apellidoPaterno:['',[Validators.required,Validators.pattern(/^[a-zA-Z]+$/)]],
      apellidoMaterno:['',[Validators.required,Validators.pattern(/^[a-zA-Z]+$/)]],
      email:['',[Validators.required,Validators.email]],
      gender:[],
      peso:['',[Validators.required]],
      altura:['',[Validators.required]],
      IMC:['']

    })
  }

  get nombreField(){
    return this.form.get('nombre')
  }

  get apellidopField(){
    return this.form.get('apellidoPaterno')
  }

  get apellidomField(){
    return this.form.get('apellidoMaterno')
  }

   get emailField(){
    return this.form.get('email')
  }
   get pesoField(){
    return this.form.get('peso')
  }
   get alturaField(){
    return this.form.get('altura')
  }

}

import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators} from '@angular/forms'
import {Router} from '@angular/router'
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
form:FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private router:Router
  ) { 
    
  }

  ngOnInit(): void {
    this.buildForm()
  }
  
  save(event:Event){
    event.preventDefault()
    if(this.form.valid){
      const altura = this.form.get('altura').value;
      const peso = this.form.get('peso').value
      const sexo = this.form.get('gender').value
      const imc = this.CalcularIMC(altura,peso);
      console.log(imc)
      this.reglas(imc,sexo);

      console.log(this.form.value)
    }
  }

  private CalcularIMC(altura,peso){
    let imc:number=0;
    imc = peso/(Math.pow(altura,2))
    imc.toFixed(2);
   
    return imc 
  }

  private reglas(imc,sexo){
    if(imc < 18.5 && sexo==='Masculino'){
      this.router.navigate(['/peso-bajo-h'])
    }else{
      if(imc < 18.5 && sexo==='Femenino'){
        this.router.navigate(['/peso-bajo-m'])
      }else{
        if ( imc>=18.5 || imc<=24.9 && sexo==='Masculino'){
          this.router.navigate(['/peso-normal-h'])
        }else{
          if ( imc>=18.5 || imc<=24.9 && sexo==='Femenino'){
            this.router.navigate(['/peso-normal-m'])
          }else{
            if ( imc>=25.0 || imc<=29.9 && sexo==='Masculino'){
              this.router.navigate(['/sobre-peso-h'])
            }else{
              if ( imc>=25.0 || imc<=29.9 && sexo==='Femenino'){
                this.router.navigate(['/sobre-peso-m'])
              }else{
                if ( imc>=30.0 || imc<=34.5 && sexo==='Masculino'){
                  this.router.navigate(['/obesidad1-h'])
                }else{
                  if ( imc>=30.0 || imc<=34.5 && sexo==='Femenino'){
                    this.router.navigate(['/obesidad1-m'])
                  }else{
                    if ( imc>=35.0 || imc<=9.0 && sexo==='Masculino'){
                      this.router.navigate(['/obesidad2-h'])
                    }else{
                      if ( imc>=35.0 || imc<=9.0 && sexo==='Femenino'){
                        this.router.navigate(['/obesidad2-m'])
                      }else{
                        if ( imc>40 && sexo==='Masculino'){
                          this.router.navigate(['/obesidad3-h'])
                        }else{
                          if ( imc>40 && sexo==='Femenino'){
                            this.router.navigate(['/obesidad3-m'])
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }

    

    
  }
  


  private buildForm(){
    this.form = this.formBuilder.group({
      nombre: ['',[Validators.required]],
      apellidoPaterno:['',[Validators.required]],
      apellidoMaterno:['',[Validators.required]],
      email:['',[Validators.required,Validators.email]],
      gender:[],
      peso:['',[Validators.required]],
      altura:['',[Validators.required]],
      IMC:['']

    })
  }
}

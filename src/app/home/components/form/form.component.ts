import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators} from '@angular/forms'
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
form:FormGroup;
  constructor(
    private formBuilder: FormBuilder
  ) { 
    
  }

  ngOnInit(): void {
    this.buildForm()
  }
  
  save(event:Event){
    event.preventDefault()
    if(this.form.valid){
      console.log(this.form.value)
    }
  }
  


  private buildForm(){
    this.form = this.formBuilder.group({
      nombre: ['',[Validators.required]],
      apellidoPaterno:['',[Validators.required]],
      apellidoMaterno:['',[Validators.required]],
      email:['',[Validators.required,Validators.email]],
      peso:['',[Validators.required]],
      altura:['',[Validators.required]],
      IMC:['']

    })
  }
}

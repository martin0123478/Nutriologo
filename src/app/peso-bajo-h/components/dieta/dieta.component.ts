import { Component, OnInit } from '@angular/core';
export interface aliments {
  grupodeAlimentos: string;
  recomendado: string;
  limitar:string;
  evitar:string
  
}

const dieta:aliments[] =[
 {
    grupodeAlimentos:'Lácteos',
    recomendado:'Entera, semidescremada, yogrt natural, leche de soya',
    limitar: '',
    evitar:''
   },
   {
     grupodeAlimentos:'Carne',
     recomendado:'Carnes rojas,pollo,res,pescado ',
     limitar: '',
     evitar:''
    },
    {
     grupodeAlimentos:'Feculas',
     recomendado:'Arroz,frijoles,lentejas,avena,habas ',
     limitar: '',
     evitar:'Alimentos procesados'
    },
    {
     grupodeAlimentos:'Frutas',
     recomendado:'Todas 2 al día', 
     limitar: '',
     evitar:''
    },
    {
     grupodeAlimentos:'Verduras',
     recomendado:'Todas ',
     limitar: '',
     evitar:''
    },
    {
     grupodeAlimentos:'Aceites y grasas',
     recomendado:'Aceite de oliva, aguacate, semillas tostadas ',
     limitar: '',
     evitar:''
    },
    {
     grupodeAlimentos:'Bebidas',
     recomendado:'Agua, té, café',
     limitar: 'Agua de fruta',
     evitar:'Alcohol, refrescos'
    },
   
  
];
@Component({
  selector: 'app-dieta',
  templateUrl: './dieta.component.html',
  styleUrls: ['./dieta.component.css']
})
export class DietaComponent implements OnInit {
  displayedColumns: string[] = ['Grupo de Alimentos', 'recomendado', 'Limitar', 'Evitar'];
  dataSource = dieta;
  constructor() { }

  ngOnInit(): void {
  }

}

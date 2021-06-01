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
    recomendado:'Entera, semidescremada, yogurt natural,queso',
    limitar: 'Queso',
    evitar:'Azucares'
   },
   {
     grupodeAlimentos:'Carne',
     recomendado:'Carnes rojas,pescaddo ',
     limitar: '',
     evitar:''
    },
    {
     grupodeAlimentos:'Feculas',
     recomendado:'Arroz,frijoles,lentejas ',
     limitar: 'Solo 1 porr comida',
     evitar:'Alimentos procesados'
    },
    {
     grupodeAlimentos:'Frutas',
     recomendado:'Todas ', 
     limitar: '2 al día',
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
     recomendado:'Aceite de oliva ',
     limitar: '',
     evitar:''
    },
    {
     grupodeAlimentos:'Bebidas',
     recomendado:'Agua',
     limitar: '',
     evitar:'Alcohol, refrescos,agua de fruta'
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

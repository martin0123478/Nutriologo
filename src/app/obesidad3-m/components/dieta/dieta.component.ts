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
    limitar: 'Cremas',
    evitar:' Azucarados'
   },
   {
     grupodeAlimentos:'Carne',
     recomendado:'Pescado, res, pollo ',
     limitar: 'Huevo, conservas',
     evitar:'Embutidos, viceras'
    },
    {
     grupodeAlimentos:'Feculas',
     recomendado:' ',
     limitar: 'Arroz, amaranto, Torillas, Palomitas naturales',
     evitar:'Alimentos procesados'
    },
    {
     grupodeAlimentos:'Frutas',
     recomendado:'Todas 2-3 al día', 
     limitar: '',
     evitar:'Aceitunas, coco, fruta seca'
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
     limitar: 'Mayonesa Ligth',
     evitar:'Manteca'
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

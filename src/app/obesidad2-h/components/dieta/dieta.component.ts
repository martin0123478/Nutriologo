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
    recomendado:'Leche entera,Leche evaporada, Yogurt natural,  ',
    limitar: 'Crema',
    evitar:' Azucarados en porciones'
   },
   {
     grupodeAlimentos:'Carne',
     recomendado:'Huevo,Pollo,pavo, Pescado,Mariscos ',
     limitar: 'Huevo, pescado azul, conservas',
     evitar:'Embutidos, viceras, tocino'
    },
    {
     grupodeAlimentos:'Feculas',
     recomendado:' ',
     limitar: 'Pan, pasta, arroz, legumbres',
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
     evitar:'Nata, crema,manteca'
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

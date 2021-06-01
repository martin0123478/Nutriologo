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
   recomendado:'Descremados, yougurt ',
   limitar: 'Quesos semicurados',
   evitar:'Enteros, Azucarados en porciones'
  },
  {
    grupodeAlimentos:'Carne',
    recomendado:'Pollo, pavo, oescado, mariscos ',
    limitar: 'Huevo, pescado azul, conservas',
    evitar:'Embutidos, viceras, tocino'
   },
   {
    grupodeAlimentos:'Feculas',
    recomendado:' ',
    limitar: 'Pan, pasta, arroz, legumbres',
    evitar:'Cereales, galletas, papas fritas'
   },
   {
    grupodeAlimentos:'Frutas',
    recomendado:'1 pieza(manzana, kiwi,naranja), 2-3 piezas(ciruelas) 4-5 fresas', 
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
    recomendado:'Aceite de oliva ',
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

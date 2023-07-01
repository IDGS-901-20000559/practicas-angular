import { Component } from '@angular/core';

@Component({
  selector: 'app-resistencias',
  templateUrl: './resistencias.component.html',
  styleUrls: ['./resistencias.component.css']
})
export class ResistenciasComponent {
  banda1!:number;
  colorBanda1='';
  banda2!:number;
  colorBanda2='';
  banda3!:number;
  colorBanda3='';
  tolerancia!:number;
  colorTolerancia='';
  valorResistencia!:number;
  valorMinimo!:number;
  valorMaximo!:number;

  colores = [
      {'valor' : 0,
       'nombre':'Negro'}, 
      {'valor' : 1,
       'nombre': 'Marrón'}, 
      {'valor' : 2,
       'nombre': 'Rojo'}, 
      {'valor' : 3,
      'nombre' :'Naranja'},
      {'valor' : 4,
      'nombre' : 'Amarillo'},
      {'valor' : 5,
      'nombre' : 'Verde'},
      {'valor' : 6,
      'nombre' : 'Azul'},
      {'valor' : 7,
      'nombre' : 'Violeta'},
      {'valor' : 8,
      'nombre' : 'Gris'},
      {'valor' : 9,
      'nombre' : 'Blanco'}
  ]

  multiplicador = [1, 10, 100, 1000,10000,100000,1000000,10000000,100000000,1000000000]
  
  coloresHex=['#000000', '#8B4513', '#FF0000', '#FFA500', '#FFFF00', '#008000', '#0000FF', '#EE82EE', '#808080', '#FFFFFF']


  calcularResistencia() {
    const mult = this.multiplicador[this.banda3];
    this.valorResistencia=(Number(this.banda1+this.banda2))*mult;

    if (Number(this.tolerancia)==1){
      this.valorMaximo=this.valorResistencia*1.05;
      this.valorMinimo=this.valorResistencia-(this.valorResistencia*.05);
      this.colorTolerancia='#FFD700';
    }else if(Number(this.tolerancia)==2){
      this.valorMaximo=this.valorResistencia*1.10;
      this.valorMinimo=this.valorResistencia-(this.valorResistencia*.10);
      this.colorTolerancia='#C0C0C0';
    }

    this.colorBanda1 = this.coloresHex[this.banda1];
    this.colorBanda2 = this.coloresHex[this.banda2];
    this.colorBanda3 = this.coloresHex[this.banda3];
  }

}
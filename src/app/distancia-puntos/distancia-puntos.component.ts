import { Component } from '@angular/core';

@Component({
  selector: 'app-distancia-puntos',
  templateUrl: './distancia-puntos.component.html',
  styleUrls: ['./distancia-puntos.component.css']
})
export class DistanciaPuntosComponent {
  x1!:number;
 x2!:number
 y1!:number;
 y2!:number
 resultado!:number;

 calcular(){
  this.resultado = Math.sqrt(Math.pow((this.x2 - this.x1), 2) 
                                        + 
                                    Math.pow((this.y2 - this.y1), 2));
 }
}

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cine',
  templateUrl: './cine.component.html',
  styleUrls: ['./cine.component.css']
})
export class CineComponent {
  cineForm!: FormGroup;
  nombreC!: string;
  numBoletos!: number;
  numPersonas!: number;
  tarjeta: boolean = false;

  message!:string;
  alert!:string;

  constructor(private readonly fb: FormBuilder) {
    this.cineForm = this.initForm();
  }

  initForm(): FormGroup {
    return this.fb.group({
      nombreC: ['', [Validators.required, Validators.minLength(5)]],
      numBoletos: [0, [Validators.required]],
      numPersonas: [0, [Validators.required]],
      tarjeta: [false]
    })
  }

  obtenerDatos():boolean{
    let response!:boolean;
    this.nombreC = this.cineForm.get('nombreC')?.value;
    this.numBoletos = this.cineForm.get('numBoletos')?.value;
    this.numPersonas = this.cineForm.get('numPersonas')?.value;
    this.tarjeta = this.cineForm.get('tarjeta')?.value;

    if(this.nombreC == '' || this.numBoletos == 0 || this.numPersonas == 0){
      this.message='Debes llenar los datos en el formulario de forma correcta';
      this.alert='danger';
      response = false;
    }else if(this.numBoletos < 0 || this.numPersonas < 0){
      this.message='No se aceptan valores negativos';
      this.alert='danger';
      response = false;
    }else{
      response = true;
    }

    return response;
    
  }

  calcularVenta():void{
    if(this.obtenerDatos()){;

    let totalVenta = 0;
    let descuento = 0;

    if(this.numBoletos > 5){
      descuento = 0.15;
    }else if(this.numBoletos >= 3){
      descuento = 0.10;
    }else{
      descuento = 0;
    }

    if(!(this.numBoletos > (this.numPersonas * 7))){
      totalVenta = (this.numBoletos*12) - ((this.numBoletos*12)*descuento);

      if(this.tarjeta){
        totalVenta = totalVenta - (totalVenta * 0.10);
      }

      this.message="Venta efectuada a nombre de "+this.nombreC+". Tu total es de "+totalVenta;
      this.alert = 'success'
      this.cineForm = this.initForm();
    }else{
      this.message = "Solo se pueden comprar 7 boletos por persona";
      this.alert = 'danger'
    }
  }
}
}



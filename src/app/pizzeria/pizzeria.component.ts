import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-pizzeria',
  templateUrl: './pizzeria.component.html',
  styleUrls: ['./pizzeria.component.css']
})
export class PizzeriaComponent {
  pizzeriaForm!:FormGroup;
  nombreCliente!:string;
  direccionCliente!:string;
  telefonoCliente!:string;
  tamanioSel!:number;
  ingredientSel!:number;
  numPizzas!:number;
  pizzas=[{}];
  total!:number;

  tamanios = [
    {'valor' : 40,
     'nombre':'Chica'},
     {'valor' : 80,
     'nombre':'Mediana'},
     {'valor' : 120,
     'nombre':'Grande'}
  ]

  ingredientes = [
    {'valor' : 10,
     'nombre':'Jamon'},
     {'valor' : 10,
     'nombre':'Piña'},
     {'valor' : 10,
     'nombre':'Champiñones'}
  ]

  constructor(private readonly fb:FormBuilder){
    this.pizzeriaForm = this.initForm();
  }

  initForm():FormGroup{
    return this.fb.group({
      nombreCliente   : ['', [Validators.required, Validators.minLength(5)]],
      direccionCliente: ['', [Validators.required, Validators.minLength(3)]],
      telefonoCliente : ['', [Validators.required, Validators.minLength(10)]],
      tamanioSel      : ['', [Validators.required]],
      ingredientSel   : [''],
      numPizzas       : ['', [Validators.required]]
    })
  }

  onSubmit():void{
    const ingred = this.ingredientes[this.pizzeriaForm.get('ingredientSel')?.value];
    const tam = this.tamanios[this.pizzeriaForm.get('tamanioSel')?.value]

    const pizza = {
                'nombre'     : this.pizzeriaForm.get('nombreCliente')?.value,
                'direccion'  : this.pizzeriaForm.get('direccionCliente')?.value,
                'telefono'   : this.pizzeriaForm.get('telefonoCliente')?.value,
                'fecha'      : new Date().toDateString(),
                'tamanio'    : tam,
                'ingrediente': ingred,
                'numPizzas'  : this.pizzeriaForm.get('numPizzas')?.value,
                'total'      : (tam.valor+ingred.valor)*this.pizzeriaForm.get('numPizzas')?.value
                }
   
   this.pizzas.push(pizza);
   console.log(this.pizzas)
  }
}

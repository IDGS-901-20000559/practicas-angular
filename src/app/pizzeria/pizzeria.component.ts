import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-pizzeria',
  templateUrl: './pizzeria.component.html',
  styleUrls: ['./pizzeria.component.css']
})
export class PizzeriaComponent {
  pizzeriaForm!: FormGroup;
  nombreCliente!: string;
  direccionCliente!: string;
  telefonoCliente!: string;
  tamanioSel!: number;
  ingredientSel!: number;
  numPizzas!: number;
  pizzas: any[] = [];
  ventas: any[] = [];
  totalVentas: number = 0;
  message!: string;
  alert!: string;

  tamanios = [
    {
      'valor': 40,
      'nombre': 'Chica'
    },
    {
      'valor': 80,
      'nombre': 'Mediana'
    },
    {
      'valor': 120,
      'nombre': 'Grande'
    }
  ]

  ingredientes = [
    {
      'valor': 10,
      'nombre': 'Jamon'
    },
    {
      'valor': 10,
      'nombre': 'Piña'
    },
    {
      'valor': 10,
      'nombre': 'Champiñones'
    }
  ]

  ingredientesSelect =[]
  
  constructor(private readonly fb: FormBuilder) {
    this.pizzeriaForm = this.initForm();
  }

  initForm(): FormGroup {
    return this.fb.group({
      nombreCliente: ['', [Validators.required, Validators.minLength(5)]],
      direccionCliente: ['', [Validators.required, Validators.minLength(3)]],
      telefonoCliente: ['', [Validators.required, Validators.minLength(10)]],
      tamanioSel: ['', [Validators.required]],
      ingredientSel: [''],
      numPizzas: ['', [Validators.required]]
    })
  }

  onSubmit(): void {
    const ingred = this.ingredientes[this.pizzeriaForm.get('ingredientSel')?.value];
    const tam = this.tamanios[this.pizzeriaForm.get('tamanioSel')?.value]
    let numero = this.pizzeriaForm.get('numPizzas')?.value;
    if (numero < 0) {
      this.message = 'No se aceptan valores negativos';
      this.alert = 'danger';
    } else {
      const pizza = {
        'nombre': this.pizzeriaForm.get('nombreCliente')?.value,
        'direccion': this.pizzeriaForm.get('direccionCliente')?.value,
        'telefono': this.pizzeriaForm.get('telefonoCliente')?.value,
        'fecha': new Date().toDateString(),
        'tamanio': tam,
        'ingrediente': ingred,
        'numPizzas': this.pizzeriaForm.get('numPizzas')?.value,
        'subtotal': (tam.valor + ingred.valor) * this.pizzeriaForm.get('numPizzas')?.value
      }
      this.pizzas.push(pizza);
    }
  }

  borrarPedido(): void {
    this.pizzas.pop();
  }

  calcularVenta(): void {
    let total = 0
    for (let index = 0; index < this.pizzas.length; index++) {
      total += this.pizzas[index]['subtotal'];
    }
    this.totalVentas += total;
    const venta = {
      'cliente': this.pizzas[0]['nombre'],
      'direccion': this.pizzas[0]['direccion'],
      'telefono': this.pizzas[0]['telefono'],
      'fecha': new Date().toDateString(),
      'total': total
    };

    this.ventas.push(venta);
    this.pizzas = [];
    this.pizzeriaForm = this.initForm();
  }

}

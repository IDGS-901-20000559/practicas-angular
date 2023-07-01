import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DistanciaPuntosComponent } from './distancia-puntos.component';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatRadioModule} from '@angular/material/radio';
import {MatFormFieldModule} from '@angular/material/form-field';


@NgModule({
  declarations: [
    DistanciaPuntosComponent
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatButtonModule, 
    MatIconModule,
    MatRadioModule,
    MatFormFieldModule,
    FormsModule
  ],
  exports:[
    DistanciaPuntosComponent
  ]
})
export class DistanciaPuntosModule { }

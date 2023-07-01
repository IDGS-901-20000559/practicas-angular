import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DistanciaPuntosModule } from './distancia-puntos/distancia-puntos.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ResistenciasComponent } from './resistencias/resistencias.component';
import { ResistenciaModule } from './resistencia/resistencia.module';
import { MenuComponent } from './menu/menu.component';
import { AppRoutingModule } from './app.routing.module';
import { PizzeriaComponent } from './pizzeria/pizzeria.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PizzeriaComponent
  ],
  imports: [
    BrowserModule,
    DistanciaPuntosModule,
    AppRoutingModule,
    ResistenciaModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

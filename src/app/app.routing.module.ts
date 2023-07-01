import {RouterModule, Routes} from '@angular/router'
import{NgModule} from '@angular/core'
// import { IricComponent } from './grupos/iric/iric.component'
import { ResistenciasComponent } from './resistencias/resistencias.component'
import { DistanciaPuntosComponent } from './distancia-puntos/distancia-puntos.component'
import { PizzeriaComponent } from './pizzeria/pizzeria.component'


const routes:Routes=[
    {path:'Resistencias', component: ResistenciasComponent},
    {path:'Distancia', component: DistanciaPuntosComponent},
    {path:'Pizzeria', component: PizzeriaComponent},
]

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule{}
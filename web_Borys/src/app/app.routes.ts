// se configura


import { Routes } from '@angular/router';
// Asegúrate de que el nombre de la clase sea el correcto
import { CuerpoInicio } from './cuerpo-inicio/cuerpo-inicio'; 
import { Tienda} from './tienda/tienda'; 
import { Datos } from './datos/datos';

export const routes: Routes = [
  // Usa el nombre de la clase corregido
  { path: '', component: CuerpoInicio }, 
  { path: 'tienda', component: Tienda },
   { path: 'datos', component: Datos },
  
];
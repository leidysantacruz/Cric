import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

import { ListarComponent } from './listar/listar.component'; 
import { CargarDocumentoComponent } from './cargar-documento/cargar-documento.component'; 

export const routes: Routes = [
  { path: '', component: LoginComponent },

  { path: 'listar', component: ListarComponent },
  { path: 'cargar-documento', component: CargarDocumentoComponent },
  { path: '**', redirectTo: '' }
];

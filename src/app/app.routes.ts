import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ListarComponent } from './listar/listar.component'; 
import { CargarDocumentoComponent } from './cargar-documento/cargar-documento.component'; 
import { HomeComponent } from './home/home.component'; 

export const routes: Routes = [
  { path: '', component: HomeComponent }, // Ruta para el HomeComponent
  { path: 'login', component: LoginComponent }, // Ruta para el LoginComponent
  { path: 'listar', component: ListarComponent }, // Ruta para el ListarComponent
  { path: 'cargar-documento', component: CargarDocumentoComponent }, // Ruta para el CargarDocumentoComponent
  { path: '**', redirectTo: '' } // Ruta para manejar rutas no encontradas
];

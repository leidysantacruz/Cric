import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ListarComponent } from './listar/listar.component';
import { CargarDocumentoComponent } from './cargar-documento/cargar-documento.component';
import { HomeComponent } from './home/home.component';
import { GenerarActaComponent } from './generar-acta/generar-acta.component'; 
import { BusquedaFiltroComponent } from './busqueda-filtro/busqueda-filtro.component';
import { PrevizualizacionInfoComponent } from './previzualizacion-info/previzualizacion-info.component'; // Asegúrate de importar el componente

export const routes: Routes = [
  { path: '', component: HomeComponent }, 
  { path: 'login', component: LoginComponent }, 
  { path: 'listar', component: ListarComponent },
  { path: 'cargar-documento', component: CargarDocumentoComponent }, 
  { path: 'generar-acta', component: GenerarActaComponent }, 
  { path: 'busqueda-filtro', component: BusquedaFiltroComponent },
  { path: 'previzualizacion-info', component: PrevizualizacionInfoComponent }, // Añadir esta línea
  { path: '**', redirectTo: '' } 
];

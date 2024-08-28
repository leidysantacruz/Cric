import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  constructor(private router: Router) {}

  
  redirectToGenerarActa() {
    this.router.navigate(['/generar-acta']);
  }

  
  goToBusquedaFiltro() {
    this.router.navigate(['/busqueda-filtro']);
  }

  
  redirectToListar() {
    this.router.navigate(['/listar']);
  }
}

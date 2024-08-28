import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-busqueda-filtro',
  standalone: true,
  templateUrl: './busqueda-filtro.component.html',
  styleUrls: ['./busqueda-filtro.component.css'],
})
export class BusquedaFiltroComponent {
  constructor(private router: Router) {}

  goBack() {
    this.router.navigate(['/home']); 
  }
}

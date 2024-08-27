import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-busqueda-filtro',
  standalone: true,
  imports: [CommonModule, FormsModule], // Agrega los módulos necesarios
  templateUrl: './busqueda-filtro.component.html',
  styleUrls: ['./busqueda-filtro.component.css']
})
export class BusquedaFiltroComponent {
  goBack() {
    // Implementa la lógica para volver atrás
    // Por ejemplo, usando Router para redirigir
    // this.router.navigate(['/ruta-anterior']);
  }
}

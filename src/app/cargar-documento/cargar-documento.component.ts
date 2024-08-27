import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cargar-documento',
  templateUrl: './cargar-documento.component.html',
  styleUrls: ['./cargar-documento.component.css']
})
export class CargarDocumentoComponent {
  
  showModal: boolean = false;

  constructor(private router: Router) {}

  // Abre el modal
  openModal() {
    this.showModal = true;
  }

  // Cierra el modal
  closeModal() {
    this.showModal = false;
  }

  // Maneja la confirmación
  confirm() {
    // Implementa la lógica de confirmación aquí
    console.log('Confirmado');
    this.closeModal();
  }

  // Redirige a la vista de 'Cargar Documento' cuando se hace clic en 'Nuevo'
  openNuevoView() {
    this.closeModal();  // Cierra el modal antes de redirigir
    // Verifica si deseas redirigir o solo cerrar el modal
    this.router.navigate(['/cargar-documento']);  // Redirige a la vista de 'Cargar Documento'
  }
}

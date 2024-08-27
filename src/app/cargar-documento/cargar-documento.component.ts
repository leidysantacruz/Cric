import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Importa Router para la navegación

@Component({
  selector: 'app-cargar-documento',
  standalone: true,
  imports: [NgClass],
  templateUrl: './cargar-documento.component.html',
  styleUrls: ['./cargar-documento.component.css']
})
export class CargarDocumentoComponent {
  showModal: boolean = false;
  showSuccessModal: boolean = false; 

  constructor(private router: Router) {}

  openModal() {
    this.showModal = true; 
  }

  closeModal() {
    this.showModal = false; 
  }
  confirm(event: Event) {
    event.preventDefault(); // Previene el comportamiento por defecto del formulario, si es necesario
    this.showModal = false; // Cierra el modal principal
    this.showSuccessModal = true; // Muestra el modal de éxito
}



  closeSuccessModal() {
    this.showSuccessModal = false; 
  }
}

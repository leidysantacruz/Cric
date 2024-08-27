import { Component } from '@angular/core';
import { NgClass } from '@angular/common'; // Importa NgClass
import { Router } from '@angular/router'; // Importa Router para la navegación

@Component({
  selector: 'app-listar',
  standalone: true, // Asegúrate de que este componente sea standalone
  imports: [NgClass], // Agrega NgClass a los imports del componente
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent {
  showModal: boolean = false;

  constructor(private router: Router) {} // Inyecta el Router en el constructor

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }

  // Método para redirigir a la vista de Cargar Documento cuando se hace clic en "Nuevo"
  openNuevoView() {
    this.closeModal();  // Cierra el modal antes de redirigir
    this.router.navigate(['/cargar-documento']);  // Redirige a la ruta de 'Cargar Documento'
  }
}

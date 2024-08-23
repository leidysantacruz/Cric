import { Component } from '@angular/core';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',  // Asegúrate de que el nombre coincide con el archivo HTML correcto
  styleUrls: ['./listar.component.css']
})
export class ListarComponent {  // Nombre correcto de la clase

  openModal() {
    const modal = document.getElementById("myModal");
    if (modal) {
      modal.style.display = "block";
    }
  }

  closeModal() {
    const modal = document.getElementById("myModal");
    if (modal) {
      modal.style.display = "none";
    }
  }
}

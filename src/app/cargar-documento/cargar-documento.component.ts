import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cargar-documento',
  standalone: true,
  templateUrl: './cargar-documento.component.html',
  styleUrls: ['./cargar-documento.component.css']
})
export class CargarDocumentoComponent {
  file: File | null = null;

  constructor(private router: Router) { } // Inyecta el Router

  // Método para navegar a la página de previsualización
  redirectToPrevizualizacionInfo() {
    this.router.navigate(['/previzualizacion-info']);
  }

  // Método para volver a la lista
  goBack() {
    this.router.navigate(['./listar']);
  }

  // Método para manejar el evento de arrastre sobre la zona de carga
  onDragOver(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
  }

  // Método para manejar el evento de soltar archivo en la zona de carga
  onFileDropped(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    if (event.dataTransfer && event.dataTransfer.files.length > 0) {
      this.file = event.dataTransfer.files[0];
      console.log("Archivo subido:", this.file);
    }
  }

  // Método para manejar la selección de archivo mediante el input
  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.file = input.files[0];
      console.log("Archivo seleccionado:", this.file);
    }
  }

  // Método para abrir el selector de archivos
  triggerFileInput() {
    const fileInput = document.getElementById('fileInput') as HTMLInputElement;
    if (fileInput) {
      fileInput.click();
    }
  }
}

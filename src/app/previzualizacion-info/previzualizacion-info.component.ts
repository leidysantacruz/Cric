import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common'; // Import CommonModule

@Component({
  selector: 'app-previzualizacion-info',
  standalone: true,
  templateUrl: './previzualizacion-info.component.html',
  styleUrls: ['./previzualizacion-info.component.css'],
  imports: [CommonModule], // Add CommonModule to imports
})
export class PrevizualizacionInfoComponent {
  isModalVisible: boolean = false;

  constructor(private router: Router) {}

  openModal() {
    this.isModalVisible = true;
  }

  closeModal() {
    this.isModalVisible = false;
  }

  redirectToGenerarActa() {
    this.router.navigate(['/generar-acta']);
  }

  goBack() {
    this.router.navigate(['/cargar-documento']);
  }
}

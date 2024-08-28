import { Component } from '@angular/core';
import { NgClass } from '@angular/common'; 
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-listar',
  standalone: true, 
  imports: [NgClass], 
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent {
  showModal: boolean = false;

  constructor(private router: Router) {} 

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }


  openNuevoView() {
    this.closeModal();  
    this.router.navigate(['/cargar-documento']);  
  }
  redirectToGenerarActa() {
    this.router.navigate(['/generar-acta']);
  }
}

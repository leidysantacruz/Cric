import { Component } from '@angular/core';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-cargar-documento',
  standalone: true,
  templateUrl: './cargar-documento.component.html',
  styleUrls: ['./cargar-documento.component.css']
})
export class CargarDocumentoComponent {
  constructor(private router: Router) {}

  redirectToPrevizualizacionInfo() {
    this.router.navigate(['/previzualizacion-info']);
  }
}

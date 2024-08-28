import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-previzualizacion-info',
  standalone: true,
  templateUrl: './previzualizacion-info.component.html',
  styleUrls: ['./previzualizacion-info.component.css']
})
export class PrevizualizacionInfoComponent {
  constructor(private router: Router) {}

  redirectToGenerarActa() {
    this.router.navigate(['/generar-acta']);
  }
}

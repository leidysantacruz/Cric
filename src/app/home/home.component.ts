import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private router: Router) { }

  redirectToListar() {
    // Redirige a la vista de listar cuando se hace clic en el botón
    this.router.navigate(['/listar']);
  }
}

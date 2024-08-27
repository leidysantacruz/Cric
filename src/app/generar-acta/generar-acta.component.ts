import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-generar-acta',
  templateUrl: './generar-acta.component.html',
  styleUrls: ['./generar-acta.component.css']
})
export class GenerarActaComponent {
  constructor(private router: Router) { }

  goBack() {
    this.router.navigate(['/home']); 
  }
}

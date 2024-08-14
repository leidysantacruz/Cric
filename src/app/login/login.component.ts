import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private router: Router) {}

  onSubmit() {
    console.log('Usuario:', this.username);
    console.log('Contraseña:', this.password);
    
    // Redirigir al usuario a la vista de home después de iniciar sesión
    this.router.navigate(['/home']);
  }
}

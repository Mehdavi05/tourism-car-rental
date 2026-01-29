import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../core/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html'
})
export class LoginComponent {
  username = '';
  role = 'Customer';
  error = '';

  constructor(
    private auth: AuthService,
    private router: Router
  ) {}

  login() {
    this.auth.login(this.username, this.role).subscribe({
      next: (res) => {
        localStorage.setItem('token', res.token);

        // Redirect based on role
        this.router.navigate([
          this.role === 'Admin' ? '/admin' : '/customer'
        ]);
      },
      error: () => {
        this.error = 'Invalid login';
      }
    });
  }
}

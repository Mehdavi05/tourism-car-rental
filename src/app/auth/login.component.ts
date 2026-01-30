import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../core/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  role: 'Customer' | 'Admin' = 'Customer';
  error: string = '';

  constructor(private auth: AuthService, private router: Router) {}

  login(): void {
    this.error = '';

    if (this.role === 'Customer') {
      // Directly navigate customer
      this.router.navigate(['/customer/cars']);
      return;
    }

    // Admin login via API
    this.auth.login(this.email, this.password).subscribe({
      next: res => {
        localStorage.setItem('token', res.token);
        this.router.navigate(['/admin']);
      },
      error: err => {
        console.error(err);
        this.error = 'Invalid login or you are not an admin.';
      }
    });
  }
}

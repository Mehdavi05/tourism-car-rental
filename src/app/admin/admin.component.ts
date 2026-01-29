import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: `
    <h2>Admin Dashboard</h2>
    <nav>
      <a routerLink="">Overview</a> |
      <a routerLink="cars">Cars</a> |
      <a routerLink="bookings">Bookings</a>
    </nav>
    <router-outlet />
  `
})
export class AdminComponent {}

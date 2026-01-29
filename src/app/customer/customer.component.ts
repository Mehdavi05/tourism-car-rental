import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: `
    <h2>Customer Area</h2>
    <nav>
      <a routerLink="">Tours</a> |
      <a routerLink="booking">Booking</a> |
      <a routerLink="payment">Payment</a>
    </nav>
    <router-outlet />
  `
})
export class CustomerComponent {}

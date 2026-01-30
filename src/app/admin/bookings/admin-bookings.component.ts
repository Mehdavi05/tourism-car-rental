import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-bookings',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin-bookings.component.html',
  styleUrls: ['./admin-bookings.component.css']
})
export class AdminBookingsComponent {
  tours = [
    { name: 'Desert Safari', duration: '1 Day', price: 120 },
    { name: 'City Tour', duration: 'Half Day', price: 60 },
  ];
}

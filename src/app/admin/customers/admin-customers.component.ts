import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-admin-customers',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin-customers.component.html',
  styleUrls: ['./admin-customers.component.css']
})
export class AdminCustomersComponent {
  tours = [
    { name: 'Desert Safari', duration: '1 Day', price: 120 },
    { name: 'City Tour', duration: 'Half Day', price: 60 },
  ];
}

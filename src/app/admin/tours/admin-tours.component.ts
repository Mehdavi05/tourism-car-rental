import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-admin-tours',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin-tours.component.html',
  styleUrls: ['./admin-tours.component.css']
})
export class AdminToursComponent {
  tours = [
    { name: 'Desert Safari', duration: '1 Day', price: 120 },
    { name: 'City Tour', duration: 'Half Day', price: 60 },
  ];
}

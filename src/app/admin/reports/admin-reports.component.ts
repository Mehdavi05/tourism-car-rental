import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-admin-reports',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin-reports.component.html',
  styleUrls: ['./admin-reports.component.css']
})
export class AdminReportsComponent {
  tours = [
    { name: 'Desert Safari', duration: '1 Day', price: 120 },
    { name: 'City Tour', duration: 'Half Day', price: 60 },
  ];
}

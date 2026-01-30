import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-admin-settings',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin-settings.component.html',
  styleUrls: ['./admin-settings.component.css']
})
export class AdminSettingsComponent {
  tours = [
    { name: 'Desert Safari', duration: '1 Day', price: 120 },
    { name: 'City Tour', duration: 'Half Day', price: 60 },
  ];
}

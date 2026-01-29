import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Car } from '../../models/car.model';
import { CarsService } from '../../services/cars.service';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  cars: Car[] = [];

  constructor(private carsService: CarsService) {}

  ngOnInit(): void {
    this.loadCars();
  }

  loadCars() {
    this.carsService.getCars().subscribe({
      next: data => this.cars = data,
      error: err => console.error(err)
    });
  }

  logout() {
    localStorage.removeItem('token');
    window.location.href = '/login';
  }
}

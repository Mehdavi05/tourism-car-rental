import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Car } from '../../models/car.model';
import { CarsService } from '../../services/cars.service';

@Component({
  selector: 'app-admin-cars',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin-cars.component.html',
  styleUrls: ['./admin-cars.component.css']
})

export class AdminCarsComponent implements OnInit {
  cars: Car[] = [];
  loading: boolean = true;  

  constructor(private carsService: CarsService) {}

  ngOnInit(): void {
    this.loadCars();
  }

  loadCars(): void {
    this.loading = true;
    this.carsService.getCars().subscribe({
      next: data => {
        this.cars = data;
        this.loading = false;
      },
      error: err => {
        console.error(err);
        this.loading = false;
      }
    });
  }

  logout() {
    localStorage.removeItem('token');
    window.location.href = '/login';
  }
}

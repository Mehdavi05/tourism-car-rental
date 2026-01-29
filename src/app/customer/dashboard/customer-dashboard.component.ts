import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Car } from '../../models/car.model';
import { CarsService } from '../../services/cars.service';
import { BookingsService } from '../../services/bookings.service';

@Component({
  selector: 'app-customer-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './customer-dashboard.component.html',
  styleUrls: ['./customer-dashboard.component.css']
})
export class CustomerDashboardComponent implements OnInit {
  cars: Car[] = [];
  message: string = '';

  constructor(
    private carsService: CarsService,
    private bookingsService: BookingsService
  ) {}

  ngOnInit(): void {
    this.loadCars();
  }

  loadCars() {
    this.carsService.getCars().subscribe({
      next: data => this.cars = data.filter(c => c.available),
      error: err => console.error(err)
    });
  }

  bookCar(car: Car) {
    const booking = {
      carId: car.id,
      fromDate: new Date().toISOString(),
      toDate: new Date(new Date().getTime() + 2*24*60*60*1000).toISOString()
    };

    this.bookingsService.bookCar(booking).subscribe({
      next: res => {
        this.message = `You have booked: ${car.name} for ${car.pricePerDay} USD`;
        car.available = false;
        this.loadCars();
      },
      error: err => {
        this.message = `Booking failed: ${err.error?.message || err.statusText}`;
      }
    });
  }

  logout() {
    localStorage.removeItem('token');
    window.location.href = '/login';
  }
}

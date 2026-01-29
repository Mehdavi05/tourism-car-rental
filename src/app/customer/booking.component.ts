import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CarsService } from '../services/cars.service';
import { BookingsService } from '../services/bookings.service';
import { Car } from '../models/car.model';
import { Booking } from '../models/booking.model';

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="booking-container">
      <h2>Book a Car</h2>

      <form (ngSubmit)="submitBooking()" *ngIf="cars.length > 0">
        <label for="car">Select Car:</label>
        <select id="car" [(ngModel)]="selectedCarId" name="car" required>
          <option *ngFor="let car of cars" [value]="car.id">{{ car.name }} ({{ car.brand }}) - {{ car.pricePerDay | currency:'USD' }}</option>
        </select>

        <label for="fromDate">From Date:</label>
        <input type="date" id="fromDate" [(ngModel)]="fromDate" name="fromDate" required>

        <label for="toDate">To Date:</label>
        <input type="date" id="toDate" [(ngModel)]="toDate" name="toDate" required>

        <button type="submit">Book Now</button>
      </form>

      <p *ngIf="message" class="message">{{ message }}</p>
      <p *ngIf="cars.length === 0">No cars available for booking.</p>
    </div>
  `,
  styles: [`
    .booking-container { padding: 1rem; max-width: 600px; margin: auto; }
    form { display: flex; flex-direction: column; gap: 0.5rem; }
    label { font-weight: bold; }
    select, input { padding: 0.3rem; }
    button { padding: 0.5rem; cursor: pointer; }
    .message { color: green; font-weight: bold; margin-top: 1rem; }
  `]
})
export class BookingComponent implements OnInit {
  cars: Car[] = [];
  selectedCarId: number | null = null;
  fromDate: string = '';
  toDate: string = '';
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

  submitBooking() {
    if (!this.selectedCarId || !this.fromDate || !this.toDate) {
      this.message = 'Please fill all fields.';
      return;
    }

    const booking: Booking = {
      carId: this.selectedCarId,
      fromDate: this.fromDate,
      toDate: this.toDate
    };

    this.bookingsService.bookCar(booking).subscribe({
      next: res => {
        this.message = 'Booking successful!';
        this.loadCars(); // refresh available cars
        this.selectedCarId = null;
        this.fromDate = '';
        this.toDate = '';
      },
      error: err => {
        this.message = `Booking failed: ${err.error?.message || err.statusText}`;
      }
    });
  }
}

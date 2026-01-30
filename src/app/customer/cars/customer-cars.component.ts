import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Car } from '../../models/car.model';
import { Booking } from '../../models/booking.model';
import { CarsService } from '../../services/cars.service';
import { BookingsService } from '../../services/bookings.service';
import { AuthService } from '../../core/auth.service';

@Component({
  selector: 'app-customer-cars',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './customer-cars.component.html',
  styleUrls: ['./customer-cars.component.css']
})
export class CustomerCarsComponent implements OnInit {

  cars: Car[] = [];
  message: string = '';

  // Modal visibility
  showBookingModal: boolean = false;

  // Selected car for booking
  selectedCar: Car | null = null;

  // Booking form fields
  bookingForm: Partial<Booking> = {
    pickupDate: '',
    dropoffDate: '',
    customerPhone: '',
    customerEmail: '',
    nationality: '',
    notes: ''
  };

  constructor(
    private carsService: CarsService,
    private bookingsService: BookingsService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.loadCars();
  }

  loadCars(): void {
    this.carsService.getCars().subscribe({
      next: data => this.cars = data,
      error: err => console.error(err)
    });
  }

  openBookingModal(car: Car) {
    this.selectedCar = car;
    this.showBookingModal = true;

    // Reset form
    this.bookingForm = {
      pickupDate: '',
      dropoffDate: '',
      customerPhone: '',
      customerEmail: '',
      nationality: '',
      notes: ''
    };
  }

  closeBookingModal() {
    this.showBookingModal = false;
    this.selectedCar = null;
  }

  calculateDays(from: string, to: string): number {
    const start = new Date(from);
    const end = new Date(to);
    const diffTime = end.getTime() - start.getTime();
    return Math.max(Math.ceil(diffTime / (1000 * 60 * 60 * 24)), 1);
  }

  submitBooking() {
    if (!this.selectedCar) return;

    const { pickupDate, dropoffDate, customerPhone, customerEmail, nationality, notes } = this.bookingForm;

    if (!pickupDate || !dropoffDate) {
      this.message = 'Please select pickup and dropoff dates.';
      return;
    }

    const totalDays = this.calculateDays(pickupDate!, dropoffDate!);

    const booking: Booking = {
      bookingId: 0,
      bookingType: 'CAR',customerName: this.authService.getUsername() || 'Guest',
      customerPhone: customerPhone || '',
      customerEmail: customerEmail || '',
      nationality: nationality || '',
      carId: this.selectedCar.carId,
      pickupDate: pickupDate,
      dropoffDate: dropoffDate,
      tourId: null,
      tourPackage: null,
      tourDate: null,
      totalAmount: this.selectedCar.pricePerDay * totalDays,
      bookingStatus: 'Pending',      
      paymentStatus: 'Unpaid',
      notes: notes || '',
      createdAt: new Date().toISOString()
    };

    this.bookingsService.bookCar(booking).subscribe({
      next: () => {
        this.selectedCar!.isAvailable = false;
        this.message = `You have booked: ${this.selectedCar!.name} from ${pickupDate} to ${dropoffDate} (Total: $${booking.totalAmount})`;
        this.closeBookingModal();
      },
      error: err => {
        console.error(err);
        this.message = 'Booking failed. Please try again.';
      }
    });
  }
}

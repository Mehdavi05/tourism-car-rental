import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';   // ngModel, ngForm
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  booking = {
    name: '',
    email: '',
    phone: '',
    car: '',
    startDate: '',
    endDate: ''
  };
  submitted = false;

  cars = [
    { name: 'Toyota Corolla' },
    { name: 'Honda Civic' },
    { name: 'Ford Explorer' },
    { name: 'BMW X5' },
  ];

  constructor() { }

  ngOnInit(): void { }

  submitBooking() {
    this.submitted = true;
    console.log('Booking submitted', this.booking);
    this.booking = { name: '', email: '', phone: '', car: '', startDate: '', endDate: '' };
  }
}

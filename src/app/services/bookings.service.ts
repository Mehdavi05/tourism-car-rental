import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Booking } from '../models/booking.model';

@Injectable({
  providedIn: 'root'
})
export class BookingsService {

  private baseUrl = 'http://localhost:5262/api/Bookings'; // ✅ MUST match backend

  constructor(private http: HttpClient) {}

  bookCar(booking: any): Observable<any> {
    const token = localStorage.getItem('token');

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {})
    });

    console.log('📤 Booking Payload:', booking); // DEBUG
    console.log('📡 Posting to:', this.baseUrl);

    return this.http.post(this.baseUrl, booking, { headers });
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Booking } from '../models/booking.model';

@Injectable({ providedIn: 'root' })
export class BookingsService {
  private api = 'http://localhost:5262/api/bookings';

  constructor(private http: HttpClient) {}

  bookCar(booking: Booking): Observable<Booking> {
    return this.http.post<Booking>(this.api, booking);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Car } from '../models/car.model';

@Injectable({ providedIn: 'root' })
export class CarsService {
  private api = 'http://localhost:5262/api/cars';

  constructor(private http: HttpClient) {}

  getCars(): Observable<Car[]> {
    return this.http.get<Car[]>(this.api);
  }

  addCar(car: Car): Observable<Car> {
    return this.http.post<Car>(this.api, car);
  }
}

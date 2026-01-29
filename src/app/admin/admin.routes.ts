import { Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard.component';
import { CarsComponent } from './cars.component';
import { BookingsComponent } from './bookings.component';

export default [
  {
    path: '',
    component: AdminComponent,
    children: [
      { path: '', component: DashboardComponent },
      { path: 'cars', component: CarsComponent },
      { path: 'bookings', component: BookingsComponent }
    ]
  }
] as Routes;

import { Routes } from '@angular/router';
import { AdminDashboardComponent } from './dashboard/admin-dashboard.component';
import { DashboardComponent } from './dashboard.component';
import { CarsComponent } from './cars.component';
import { BookingsComponent } from './bookings.component';

export default [
  {
    path: '',
    component: AdminDashboardComponent,
    children: [
      { path: 'admin', component: DashboardComponent },
      { path: 'cars', component: CarsComponent },
      { path: 'bookings', component: BookingsComponent }
    ]
  }
] as Routes;

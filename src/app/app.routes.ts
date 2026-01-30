import { Routes } from '@angular/router';

import { authGuard } from './core/auth.guard';

import { LoginComponent } from './auth/login.component';

// Admin Components
import { AdminDashboardComponent } from './admin/dashboard/admin-dashboard.component';
import { AdminCarsComponent } from './admin/cars/admin-cars.component';
import { AdminOverviewComponent } from './admin/overview/admin-overview.component';
import { AdminToursComponent } from './admin/tours/admin-tours.component';
import { AdminBookingsComponent } from './admin/bookings/admin-bookings.component';
import { AdminCustomersComponent } from './admin/customers/admin-customers.component';
import { AdminReportsComponent } from './admin/reports/admin-reports.component';
import { AdminSettingsComponent } from './admin/settings/admin-settings.component';

// Customer Components
import { CustomerCarsComponent } from './customer/cars/customer-cars.component';
import { DashboardComponent } from './customer/dashboard/dashboard.component';
import { ContactComponent } from './customer/contact/contact.component';
import { BookingComponent } from './customer/booking/booking.component'; 
import { HomeComponent } from './customer/home/home.component'; 
import { CarDetailComponent } from './customer/car-detail/car-detail.component';

export const routes: Routes = [

  { path: 'login', component: LoginComponent },

  {
    path: 'admin',
    component: AdminDashboardComponent,
    canActivate: [authGuard],
    children: [
      { path: '', redirectTo: 'overview', pathMatch: 'full' },
      { path: 'overview', component: AdminOverviewComponent },
      { path: 'cars', component: AdminCarsComponent },
      { path: 'tours', component: AdminToursComponent },
      { path: 'bookings', component: AdminBookingsComponent },
      { path: 'customers', component: AdminCustomersComponent },
      { path: 'reports', component: AdminReportsComponent },
      { path: 'settings', component: AdminSettingsComponent }
    ]
  },

  {
    path: 'customer',
    component: DashboardComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'cars', component: CustomerCarsComponent },
      { path: 'cars/:id', component: CarDetailComponent },
      { path: 'booking', component: BookingComponent },
      { path: 'contact', component: ContactComponent }
    ]
  },

  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login' }
];

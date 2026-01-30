// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login.component';
import { AdminDashboardComponent } from './admin/dashboard/admin-dashboard.component';
import { CustomerDashboardComponent } from './customer/dashboard/customer-dashboard.component';
import { authGuard } from './core/auth.guard'; // if you have one

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdminDashboardComponent, canActivate: [authGuard] }, // JWT protected
  { path: 'customer', component: CustomerDashboardComponent }, // open
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];

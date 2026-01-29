import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login.component';
import { AdminDashboardComponent } from './admin/dashboard/admin-dashboard.component';
import { CustomerDashboardComponent } from './customer/dashboard/customer-dashboard.component';
import { authGuard } from './core/auth.guard';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdminDashboardComponent, canActivate: [authGuard] },
  { path: 'customer', component: CustomerDashboardComponent, canActivate: [authGuard] },
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];

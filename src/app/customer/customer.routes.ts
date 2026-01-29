import { Routes } from '@angular/router';
import { CustomerComponent } from './customer.component';
import { ToursComponent } from './tours.component';
import { BookingComponent } from './booking.component';
import { PaymentComponent } from './payment.component';

export default [
  {
    path: '',
    component: CustomerComponent,
    children: [
      { path: '', component: ToursComponent },
      { path: 'booking', component: BookingComponent },
      { path: 'payment', component: PaymentComponent }
    ]
  }
] as Routes;

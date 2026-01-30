import { Car } from './car.model';
import { TourPackage } from './tour-package.model';

export interface Booking {
  bookingId: number;
  bookingType: 'CAR' | 'TOUR';

  customerName: string;
  customerPhone: string; 
  customerEmail?: string;
  nationality?: string;

  carId?: number | null;
  car?: Car | null;
  pickupDate?: string | null;
  dropoffDate?: string | null;

  tourId?: number | null;
  tourPackage?: TourPackage | null;
  tourDate?: string | null;

  totalAmount: number;
  bookingStatus: string;
  paymentStatus: string;

  notes?: string;
  createdAt: string;
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface TourPackage {
  id: number;
  title: string;
  description: string;
  duration: string;
  price: number;
  image: string;
  isAvailable: boolean;
}

@Component({
  selector: 'app-tour-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './tour-packages.component.html',
  styleUrls: ['./tour-packages.component.css'],
})
export class TourPackagesComponent {
  packages: TourPackage[] = [
    {
      id: 1,
      title: 'Dubai City Tour',
      description: 'Full day city tour covering all highlights.',
      duration: '1 Day',
      price: 350,
      image: '/assets/images/tours/dubai-city-tour.jpg',
      isAvailable: true,
    },
    {
      id: 2,
      title: 'Desert Safari',
      description: 'Adventure with dune bashing, camel rides & BBQ.',
      duration: 'Half Day',
      price: 450,
      image: '/assets/images/tours/desert-safari-tour.png',
      isAvailable: true,
    },
    {
      id: 3,
      title: 'Burj Khalifa & Dhow Cruise',
      description: 'Evening tour with tower visit & cruise.',
      duration: 'Evening',
      price: 400,
      image: '/assets/images/tours/dhow-cruise-tour.jpg',
      isAvailable: true,
    },
    {
      id: 4,
      title: 'Abu Dhabi City Tour',
      description: 'Explore Sheikh Zayed Mosque & Ferrari World.',
      duration: '1 Day',
      price: 550,
      image: '/assets/images/tours/abu-dhabi-city-tour.jpg',
      isAvailable: true,
    },
    {
      id: 5,
      title: 'Miracle Garden Tour',
      description:
        'Explore the world’s largest flower garden with over 50 million blooming flowers in creative designs and themed displays.',
      duration: '3–4 Hours',
      price: 50,
      image: '/assets/images/tours/miracle-garden-tour.avif',
      isAvailable: true,
    },
    {
      id: 6,
      title: 'Dubai City Tour',
      description: 'Full day city tour covering all highlights.',
      duration: '1 Day',
      price: 350,
      image: '/assets/images/tours/dubai-city-tour.jpg',
      isAvailable: true,
    },
    {
      id: 7,
      title: 'Desert Safari',
      description: 'Adventure with dune bashing, camel rides & BBQ.',
      duration: 'Half Day',
      price: 450,
      image: '/assets/images/tours/desert-safari-tour.png',
      isAvailable: true,
    },
    {
      id: 8,
      title: 'Burj Khalifa & Dhow Cruise',
      description: 'Evening tour with tower visit & cruise.',
      duration: 'Evening',
      price: 400,
      image: '/assets/images/tours/dhow-cruise-tour.jpg',
      isAvailable: true,
    },
    {
      id: 9,
      title: 'Abu Dhabi City Tour',
      description: 'Explore Sheikh Zayed Mosque & Ferrari World.',
      duration: '1 Day',
      price: 550,
      image: '/assets/images/tours/abu-dhabi-city-tour.jpg',
      isAvailable: true,
    },
    {
      id: 10,
      title: 'Miracle Garden Tour',
      description:
        'Explore the world’s largest flower garden with over 50 million blooming flowers in creative designs and themed displays.',
      duration: '3–4 Hours',
      price: 50,
      image: '/assets/images/tours/miracle-garden-tour.avif',
      isAvailable: true,
    },
    {
      id: 11,
      title: 'Dubai City Tour',
      description: 'Full day city tour covering all highlights.',
      duration: '1 Day',
      price: 350,
      image: '/assets/images/tours/dubai-city-tour.jpg',
      isAvailable: true,
    },
    {
      id: 12,
      title: 'Desert Safari',
      description: 'Adventure with dune bashing, camel rides & BBQ.',
      duration: 'Half Day',
      price: 450,
      image: '/assets/images/tours/desert-safari-tour.png',
      isAvailable: true,
    },
    {
      id: 13,
      title: 'Burj Khalifa & Dhow Cruise',
      description: 'Evening tour with tower visit & cruise.',
      duration: 'Evening',
      price: 400,
      image: '/assets/images/tours/dhow-cruise-tour.jpg',
      isAvailable: true,
    },
    {
      id: 14,
      title: 'Abu Dhabi City Tour',
      description: 'Explore Sheikh Zayed Mosque & Ferrari World.',
      duration: '1 Day',
      price: 550,
      image: '/assets/images/tours/abu-dhabi-city-tour.jpg',
      isAvailable: true,
    },
    {
      id: 15,
      title: 'Miracle Garden Tour',
      description:
        'Explore the world’s largest flower garden with over 50 million blooming flowers in creative designs and themed displays.',
      duration: '3–4 Hours',
      price: 50,
      image: '/assets/images/tours/miracle-garden-tour.avif',
      isAvailable: true,
    },
    {
      id: 16,
      title: 'Dubai City Tour',
      description: 'Full day city tour covering all highlights.',
      duration: '1 Day',
      price: 350,
      image: '/assets/images/tours/dubai-city-tour.jpg',
      isAvailable: true,
    },
    {
      id: 17,
      title: 'Desert Safari',
      description: 'Adventure with dune bashing, camel rides & BBQ.',
      duration: 'Half Day',
      price: 450,
      image: '/assets/images/tours/desert-safari-tour.png',
      isAvailable: true,
    },
    {
      id: 18,
      title: 'Burj Khalifa & Dhow Cruise',
      description: 'Evening tour with tower visit & cruise.',
      duration: 'Evening',
      price: 400,
      image: '/assets/images/tours/dhow-cruise-tour.jpg',
      isAvailable: true,
    },
    {
      id: 19,
      title: 'Abu Dhabi City Tour',
      description: 'Explore Sheikh Zayed Mosque & Ferrari World.',
      duration: '1 Day',
      price: 550,
      image: '/assets/images/tours/abu-dhabi-city-tour.jpg',
      isAvailable: true,
    },
    {
      id: 20,
      title: 'Miracle Garden Tour',
      description:
        'Explore the world’s largest flower garden with over 50 million blooming flowers in creative designs and themed displays.',
      duration: '3–4 Hours',
      price: 50,
      image: '/assets/images/tours/miracle-garden-tour.avif',
      isAvailable: true,
    },
    {
      id: 21,
      title: 'Dubai City Tour',
      description: 'Full day city tour covering all highlights.',
      duration: '1 Day',
      price: 350,
      image: '/assets/images/tours/dubai-city-tour.jpg',
      isAvailable: true,
    },
    {
      id: 22,
      title: 'Desert Safari',
      description: 'Adventure with dune bashing, camel rides & BBQ.',
      duration: 'Half Day',
      price: 450,
      image: '/assets/images/tours/desert-safari-tour.png',
      isAvailable: true,
    },
    {
      id: 23,
      title: 'Burj Khalifa & Dhow Cruise',
      description: 'Evening tour with tower visit & cruise.',
      duration: 'Evening',
      price: 400,
      image: '/assets/images/tours/dhow-cruise-tour.jpg',
      isAvailable: true,
    },
    {
      id: 24,
      title: 'Abu Dhabi City Tour',
      description: 'Explore Sheikh Zayed Mosque & Ferrari World.',
      duration: '1 Day',
      price: 550,
      image: '/assets/images/tours/abu-dhabi-city-tour.jpg',
      isAvailable: true,
    },
    {
      id: 25,
      title: 'Miracle Garden Tour',
      description:
        'Explore the world’s largest flower garden with over 50 million blooming flowers in creative designs and themed displays.',
      duration: '3–4 Hours',
      price: 50,
      image: '/assets/images/tours/miracle-garden-tour.avif',
      isAvailable: true,
    },
    {
      id: 26,
      title: 'Dubai City Tour',
      description: 'Full day city tour covering all highlights.',
      duration: '1 Day',
      price: 350,
      image: '/assets/images/tours/dubai-city-tour.jpg',
      isAvailable: true,
    },
    {
      id: 27,
      title: 'Desert Safari',
      description: 'Adventure with dune bashing, camel rides & BBQ.',
      duration: 'Half Day',
      price: 450,
      image: '/assets/images/tours/desert-safari-tour.png',
      isAvailable: true,
    },
    {
      id: 28,
      title: 'Burj Khalifa & Dhow Cruise',
      description: 'Evening tour with tower visit & cruise.',
      duration: 'Evening',
      price: 400,
      image: '/assets/images/tours/dhow-cruise-tour.jpg',
      isAvailable: true,
    },
    {
      id: 29,
      title: 'Abu Dhabi City Tour',
      description: 'Explore Sheikh Zayed Mosque & Ferrari World.',
      duration: '1 Day',
      price: 550,
      image: '/assets/images/tours/abu-dhabi-city-tour.jpg',
      isAvailable: true,
    },
    {
      id: 30,
      title: 'Miracle Garden Tour',
      description:
        'Explore the world’s largest flower garden with over 50 million blooming flowers in creative designs and themed displays.',
      duration: '3–4 Hours',
      price: 50,
      image: '/assets/images/tours/miracle-garden-tour.avif',
      isAvailable: true,
    },
    {
      id: 31,
      title: 'Dubai City Tour',
      description: 'Full day city tour covering all highlights.',
      duration: '1 Day',
      price: 350,
      image: '/assets/images/tours/dubai-city-tour.jpg',
      isAvailable: true,
    },
    {
      id: 32,
      title: 'Desert Safari',
      description: 'Adventure with dune bashing, camel rides & BBQ.',
      duration: 'Half Day',
      price: 450,
      image: '/assets/images/tours/desert-safari-tour.png',
      isAvailable: true,
    },
    {
      id: 33,
      title: 'Burj Khalifa & Dhow Cruise',
      description: 'Evening tour with tower visit & cruise.',
      duration: 'Evening',
      price: 400,
      image: '/assets/images/tours/dhow-cruise-tour.jpg',
      isAvailable: true,
    },
    {
      id: 34,
      title: 'Abu Dhabi City Tour',
      description: 'Explore Sheikh Zayed Mosque & Ferrari World.',
      duration: '1 Day',
      price: 550,
      image: '/assets/images/tours/abu-dhabi-city-tour.jpg',
      isAvailable: true,
    },
    {
      id: 35,
      title: 'Miracle Garden Tour',
      description:
        'Explore the world’s largest flower garden with over 50 million blooming flowers in creative designs and themed displays.',
      duration: '3–4 Hours',
      price: 50,
      image: '/assets/images/tours/miracle-garden-tour.avif',
      isAvailable: true,
    },
    {
      id: 36,
      title: 'Dubai City Tour',
      description: 'Full day city tour covering all highlights.',
      duration: '1 Day',
      price: 350,
      image: '/assets/images/tours/dubai-city-tour.jpg',
      isAvailable: true,
    },
    {
      id: 37,
      title: 'Desert Safari',
      description: 'Adventure with dune bashing, camel rides & BBQ.',
      duration: 'Half Day',
      price: 450,
      image: '/assets/images/tours/desert-safari-tour.png',
      isAvailable: true,
    },
    {
      id: 38,
      title: 'Burj Khalifa & Dhow Cruise',
      description: 'Evening tour with tower visit & cruise.',
      duration: 'Evening',
      price: 400,
      image: '/assets/images/tours/dhow-cruise-tour.jpg',
      isAvailable: true,
    },
    {
      id: 39,
      title: 'Abu Dhabi City Tour',
      description: 'Explore Sheikh Zayed Mosque & Ferrari World.',
      duration: '1 Day',
      price: 550,
      image: '/assets/images/tours/abu-dhabi-city-tour.jpg',
      isAvailable: true,
    },
    {
      id: 40,
      title: 'Miracle Garden Tour',
      description:
        'Explore the world’s largest flower garden with over 50 million blooming flowers in creative designs and themed displays.',
      duration: '3–4 Hours',
      price: 50,
      image: '/assets/images/tours/miracle-garden-tour.avif',
      isAvailable: true,
    },
  ];

  selectedTour?: TourPackage;
  showBookingModal: boolean = false;

  bookingForm = {
    customerName: '',
    customerPhone: '',
    customerEmail: '',
    nationality: '',
    notes: '',
    date: '',
  };

  openBookingModal(tour: TourPackage) {
    this.selectedTour = tour;
    this.showBookingModal = true;
  }

  closeBookingModal() {
    this.showBookingModal = false;
    this.bookingForm = {
      customerName: '',
      customerPhone: '',
      customerEmail: '',
      nationality: '',
      notes: '',
      date: '',
    };
  }

  submitBooking() {
    if (this.selectedTour) {
      alert(
        `Booking confirmed for ${this.selectedTour.title} on ${this.bookingForm.date}`,
      );
      this.selectedTour.isAvailable = false;
      this.closeBookingModal();
    }
  }
}

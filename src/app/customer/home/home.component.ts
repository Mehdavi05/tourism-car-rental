import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Car {
  name: string;
  image: string;
  pricePerDay: number;
  category: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  featuredCars = [
  { name: 'Rolls Royce Cullinan', image: '/assets/images/cars/car-1.jpg', pricePerDay: 2500, category:'Luxury' },
  { name: 'Lamborghini Huracan', image: '/assets/images/cars/car-2.jpg', pricePerDay: 3200, category:'Sports' },
  { name: 'Range Rover Vogue', image: '/assets/images/cars/car-3.jpg', pricePerDay: 1200, category:'SUV' },
  { name: 'Mercedes G63', image: '/assets/images/cars/car-4.jpg', pricePerDay: 1800, category:'Luxury' },
  { name: 'Rolls Royce Cullinan', image: '/assets/images/cars/car-1.jpg', pricePerDay: 2500, category:'Luxury' },
  { name: 'Lamborghini Huracan', image: '/assets/images/cars/car-2.jpg', pricePerDay: 3200, category:'Sports' },
  { name: 'Range Rover Vogue', image: '/assets/images/cars/car-3.jpg', pricePerDay: 1200, category:'SUV' },
  { name: 'Mercedes G63', image: '/assets/images/cars/car-4.jpg', pricePerDay: 1800, category:'Luxury' },
  { name: 'Rolls Royce Cullinan', image: '/assets/images/cars/car-1.jpg', pricePerDay: 2500, category:'Luxury' },
  { name: 'Lamborghini Huracan', image: '/assets/images/cars/car-2.jpg', pricePerDay: 3200, category:'Sports' },
  { name: 'Range Rover Vogue', image: '/assets/images/cars/car-3.jpg', pricePerDay: 1200, category:'SUV' },
  { name: 'Mercedes G63', image: '/assets/images/cars/car-4.jpg', pricePerDay: 1800, category:'Luxury' },
  { name: 'Rolls Royce Cullinan', image: '/assets/images/cars/car-1.jpg', pricePerDay: 2500, category:'Luxury' },
  { name: 'Lamborghini Huracan', image: '/assets/images/cars/car-2.jpg', pricePerDay: 3200, category:'Sports' },
  { name: 'Range Rover Vogue', image: '/assets/images/cars/car-3.jpg', pricePerDay: 1200, category:'SUV' },
  { name: 'Mercedes G63', image: '/assets/images/cars/car-4.jpg', pricePerDay: 1800, category:'Luxury' },
  { name: 'Rolls Royce Cullinan', image: '/assets/images/cars/car-1.jpg', pricePerDay: 2500, category:'Luxury' },
  { name: 'Lamborghini Huracan', image: '/assets/images/cars/car-2.jpg', pricePerDay: 3200, category:'Sports' },
  { name: 'Range Rover Vogue', image: '/assets/images/cars/car-3.jpg', pricePerDay: 1200, category:'SUV' },
  { name: 'Mercedes G63', image: '/assets/images/cars/car-4.jpg', pricePerDay: 1800, category:'Luxury' },
  { name: 'Rolls Royce Cullinan', image: '/assets/images/cars/car-1.jpg', pricePerDay: 2500, category:'Luxury' },
  { name: 'Lamborghini Huracan', image: '/assets/images/cars/car-2.jpg', pricePerDay: 3200, category:'Sports' },
  { name: 'Range Rover Vogue', image: '/assets/images/cars/car-3.jpg', pricePerDay: 1200, category:'SUV' },
  { name: 'Mercedes G63', image: '/assets/images/cars/car-4.jpg', pricePerDay: 1800, category:'Luxury' },
  { name: 'Rolls Royce Cullinan', image: '/assets/images/cars/car-1.jpg', pricePerDay: 2500, category:'Luxury' },
  { name: 'Lamborghini Huracan', image: '/assets/images/cars/car-2.jpg', pricePerDay: 3200, category:'Sports' },
  { name: 'Range Rover Vogue', image: '/assets/images/cars/car-3.jpg', pricePerDay: 1200, category:'SUV' },
  { name: 'Mercedes G63', image: '/assets/images/cars/car-4.jpg', pricePerDay: 1800, category:'Luxury' },
  { name: 'Rolls Royce Cullinan', image: '/assets/images/cars/car-1.jpg', pricePerDay: 2500, category:'Luxury' },
  { name: 'Lamborghini Huracan', image: '/assets/images/cars/car-2.jpg', pricePerDay: 3200, category:'Sports' },
  { name: 'Range Rover Vogue', image: '/assets/images/cars/car-3.jpg', pricePerDay: 1200, category:'SUV' },
  { name: 'Mercedes G63', image: '/assets/images/cars/car-4.jpg', pricePerDay: 1800, category:'Luxury' },
  { name: 'Rolls Royce Cullinan', image: '/assets/images/cars/car-1.jpg', pricePerDay: 2500, category:'Luxury' },
  { name: 'Lamborghini Huracan', image: '/assets/images/cars/car-2.jpg', pricePerDay: 3200, category:'Sports' },
  { name: 'Range Rover Vogue', image: '/assets/images/cars/car-3.jpg', pricePerDay: 1200, category:'SUV' },
  { name: 'Mercedes G63', image: '/assets/images/cars/car-4.jpg', pricePerDay: 1800, category:'Luxury' },
  { name: 'Rolls Royce Cullinan', image: '/assets/images/cars/car-1.jpg', pricePerDay: 2500, category:'Luxury' },
  { name: 'Lamborghini Huracan', image: '/assets/images/cars/car-2.jpg', pricePerDay: 3200, category:'Sports' },
  { name: 'Range Rover Vogue', image: '/assets/images/cars/car-3.jpg', pricePerDay: 1200, category:'SUV' },
  { name: 'Mercedes G63', image: '/assets/images/cars/car-4.jpg', pricePerDay: 1800, category:'Luxury' }
];

  constructor() {}

  ngOnInit(): void {}
}

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';   // ngModel, ngForm
import { RouterModule } from '@angular/router';
@Component({
    selector: 'app-home',
    standalone: true,
    imports: [CommonModule, FormsModule, RouterModule],
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  featuredCars = [
    { id: 1, name: 'Toyota Corolla', pricePerDay: '$50', image: '/assets/images/cars/corolla.jpg' },
    { id: 2, name: 'Honda Civic', pricePerDay: '$55', image: '/assets/images/cars/civic.jpg' },
    { id: 3, name: 'Ford Explorer', pricePerDay: '$80', image: '/assets/images/cars/explorer.jpg' },
  ];

  constructor() { }

  ngOnInit(): void { }
}

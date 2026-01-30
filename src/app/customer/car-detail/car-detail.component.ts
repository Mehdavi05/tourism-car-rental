import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';   // ngModel, ngForm
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-car-detail',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {
  car: any;

  cars = [
    { id: 1, name: 'Toyota Corolla', pricePerDay: '$50', description: 'Comfortable sedan', image: '/assets/images/cars/corolla.jpg' },
    { id: 2, name: 'Honda Civic', pricePerDay: '$55', description: 'Stylish and efficient', image: '/assets/images/cars/civic.jpg' },
    { id: 3, name: 'Ford Explorer', pricePerDay: '$80', description: 'Spacious SUV', image: '/assets/images/cars/explorer.jpg' },
    { id: 4, name: 'BMW X5', pricePerDay: '$120', description: 'Luxury SUV', image: '/assets/images/cars/x5.jpg' },
  ];

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.car = this.cars.find(c => c.id === id);
  }
}

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Car } from '../../models/car.model';
import { CarsService } from '../../services/cars.service';

@Component({
  selector: 'app-admin-cars',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './admin-cars.component.html',
  styleUrls: ['./admin-cars.component.css']
})
export class AdminCarsComponent implements OnInit {
  cars: Car[] = [];
  loading: boolean = true;  

  showAddCarModal: boolean = false;
  addCarForm: FormGroup;

  constructor(private carsService: CarsService, private fb: FormBuilder) {
    this.addCarForm = this.fb.group({
      name: ['', Validators.required],
      brand: ['', Validators.required],
      model: ['', Validators.required],
      category: ['', Validators.required],
      pricePerDay: [0, [Validators.required, Validators.min(1)]],
      isAvailable: [true]
    });
  }

  ngOnInit(): void {
    this.loadCars();
  }

  loadCars(): void {
    this.loading = true;
    this.carsService.getCars().subscribe({
      next: data => {
        this.cars = data;
        this.loading = false;
      },
      error: err => {
        console.error(err);
        this.loading = false;
      }
    });
  }

  openAddCarModal(): void {
    this.showAddCarModal = true;
  }

  closeAddCarModal(): void {
    this.showAddCarModal = false;
    this.addCarForm.reset({ isAvailable: true, pricePerDay: 0 });
  }

  submitAddCar(): void {
    if (this.addCarForm.valid) {
      const newCar: Car = this.addCarForm.value;
      this.carsService.addCar(newCar).subscribe({
        next: car => {
          this.cars.push(car); // add newly saved car to table
          this.closeAddCarModal();
        },
        error: err => {
          console.error(err);
          alert('Failed to add car. Please try again.');
        }
      });
    }
  }
}

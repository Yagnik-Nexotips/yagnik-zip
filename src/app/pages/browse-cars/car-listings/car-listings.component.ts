import { CommonModule, NgFor } from '@angular/common';
import { Component, Injectable } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ProductService } from '../../../services/product/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-car-listings',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './car-listings.component.html',
  styleUrl: './car-listings.component.scss',
})
export class CarListingsComponent {
  products: any[] = [];
  isEditMode = false;
  isModalOpen = false;
  currentCarId!: string;
  // carForm: FormGroup;

  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts(): void {
    this.productService.getAllProducts().subscribe({
      next: (response) => {
        this.products = response.products;
      },
      error: (error) => {
        console.error('Error fetching products:', error);
      },
    });
  }

  viewDetails(car: any): void {
    this.productService.selectCar(car);
    console.log('Navigating to car details for ID:', car._id); // Log the car ID
    this.router.navigate(['/car-details', car._id]);
  }
}

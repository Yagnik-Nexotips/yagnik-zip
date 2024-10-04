import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProductService } from '../../../services/product/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-featured-cars',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './featured-cars.component.html',
  styleUrl: './featured-cars.component.scss',
})
export class FeaturedCarsComponent {
  products: any[] = [];
  isEditMode = false;
  isModalOpen = false;
  currentCarId!: string;
  // carForm: FormGroup;

  constructor(
    private productService: ProductService,
    private router: Router // private fb: FormBuilder
  ) {}

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

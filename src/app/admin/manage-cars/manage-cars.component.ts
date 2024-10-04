import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ProductService } from '../../services/product/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-cars',
  standalone: true,
  imports: [NgFor, CommonModule, ReactiveFormsModule],
  templateUrl: './manage-cars.component.html',
  styleUrl: './manage-cars.component.scss',
})
export class ManageCarsComponent {
  products: any[] = [];
  isEditMode = false;
  isModalOpen = false;
  currentCarId!: string;
  carForm: FormGroup;

  constructor(
    private productService: ProductService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.carForm = this.fb.group({
      proName: ['', Validators.required],
      proCategory: ['', Validators.required],
      proImage: ['', Validators.required],
      Price: [0, [Validators.required, Validators.min(1)]],
      Discount: [0],
      discription1: ['', Validators.required],
      discription2: [''],
    });
  }

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

  editProduct(productId: string) {
    this.router.navigate(['/edit-product', productId]);
  }

  deleteProduct(productId: string) {
    if (confirm('Are you sure you want to delete this product?')) {
      this.productService.deleteProduct(productId).subscribe(
        () => {
          this.fetchProducts();
        },
        (error) => {
          console.error('Error deleting product:', error);
        }
      );
    }
  }

  addProduct() {
    this.router.navigate(['/add-product']);
  }

  openAddCarModal() {
    this.isEditMode = false;
    this.carForm.reset();
    this.isModalOpen = true;
  }

  openEditCarModal(product: any) {
    this.isEditMode = true;
    this.currentCarId = product._id;
    this.carForm.patchValue(product);
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  saveCar() {
    if (this.isEditMode) {
      this.productService
        .updateCar(this.currentCarId, this.carForm.value)
        .subscribe(
          (response) => {
            this.closeModal();
            this.fetchProducts();
          },
          (error) => {
            console.error('Update failed', error);
          }
        );
    } else {
      this.productService.addCar(this.carForm.value).subscribe(
        (response) => {
          this.closeModal();
          this.fetchProducts();
        },
        (error) => {
          console.error('Add failed', error);
        }
      );
    }
  }
}

import { OrderService } from './../../services/order/order.service';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-book-test-drive',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './book-test-drive.component.html',
  styleUrl: './book-test-drive.component.scss',
})
export class BookTestDriveComponent implements OnInit {
  orderForm: FormGroup;
  availableCars: string[] = ['Car A', 'Car B', 'Car C']; // Example car options

  constructor(
    private fb: FormBuilder,
    private orderService: OrderService,
    private router: Router
  ) {
    // Initialize the form
    this.orderForm = this.fb.group({
      orderId: ['', Validators.required],
      customerName: ['', Validators.required],
      carModel: ['', Validators.required],
      orderDate: ['', Validators.required],
      status: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  // Submit the form
  onSubmit(): void {
    if (this.orderForm.valid) {
      this.orderService.addOrder(this.orderForm.value).subscribe(
        (response) => {
          console.log('Order created successfully!', response);
          this.orderForm.reset();
        },
        (error) => {
          console.error('Error creating order', error);
          alert('There was an error creating your order. Please try again.');
        }
      );
    }
  }
  goBack(): void {
    this.router.navigate(['/']); // Change to your actual route
  }
}

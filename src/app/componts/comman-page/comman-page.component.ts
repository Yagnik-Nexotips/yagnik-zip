import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ProductService } from '../../services/product/product.service';

@Component({
  selector: 'app-comman-page',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './comman-page.component.html',
  styleUrl: './comman-page.component.scss',
})
export class CommanPageComponent implements OnInit {
  selectedCar: any;

  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit(): void {
    this.productService.selectedCar$.subscribe((car) => {
      if (car) {
        this.selectedCar = car;
        console.log('Car data received:', this.selectedCar); // Log the received car data
      } else {
        console.error('No car data passed!');
      }
    });
  }

  goBack(): void {
    this.router.navigate(['/']); // Change to your actual route
  }
}

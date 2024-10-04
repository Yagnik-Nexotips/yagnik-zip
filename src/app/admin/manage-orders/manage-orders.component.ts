import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { OrderService } from '../../services/order/order.service';

@Component({
  selector: 'app-manage-orders',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './manage-orders.component.html',
  styleUrl: './manage-orders.component.scss',
})
export class ManageOrdersComponent implements OnInit {
  orders: any[] = [];
  currentPage = 1;
  totalPages: number[] = [];

  constructor(private orderService: OrderService) {}

  ngOnInit(): void {
    this.getOrders();
  }

  // Fetch orders from the backend
  getOrders(): void {
    this.orderService.getAllOrders(this.currentPage).subscribe((data: any) => {
      this.orders = data.orders;
    });
  }

  // Update the order status
  updateOrderStatus(orderId: number, status: string): void {
    this.orderService.updateOrderStatus(orderId, status).subscribe(
      (res) => {
        console.log('Order status updated successfully!', res);
      },
      (error) => {
        console.error('Error updating order status', error);
      }
    );
  }

  // Delete an order
  deleteOrder(orderId: number): void {
    if (confirm('Are you sure you want to delete this order?')) {
      this.orderService.deleteOrder(orderId).subscribe(
        (res) => {
          this.orders = this.orders.filter((order) => order.id !== orderId);
          alert('Order deleted successfully!');
        },
        (error) => {
          console.error('Error deleting order', error);
        }
      );
    }
  }

  // View order details
  viewOrderDetails(orderId: number): void {
    // Logic to navigate or display modal with order details
    alert(`Viewing details for order ID: ${orderId}`);
    // You can add navigation logic or modal opening logic here
  }

  // Handle page changes (pagination)
  changePage(page: number): void {
    if (page >= 1 && page <= this.totalPages.length) {
      this.currentPage = page;
      this.getOrders(); // Re-fetch orders for the new page
    }
  }
}

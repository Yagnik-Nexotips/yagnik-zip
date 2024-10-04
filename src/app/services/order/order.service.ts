import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  private apiUrl = 'http://localhost:4002/order';

  constructor(private http: HttpClient) {}

  private selectedOrderSource = new BehaviorSubject<any>(null);
  selectedOrder$ = this.selectedOrderSource.asObservable();

  selectOrder(order: any): void {
    console.log('Selected order:', order); // Log the selected order
    this.selectedOrderSource.next(order);
  }

  // Get all orders
  getAllOrders(currentPage: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/allOrders?page=${currentPage}`);
  }

  // Add a new order
  addOrder(order: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/addOrder`, order);
  }

  // Update order status by ID
  updateOrderStatus(orderId: any, status: string): Observable<any> {
    return this.http.put(`${this.apiUrl}/updateOrder/${orderId}`, { status });
  }

  // Delete order by ID
  deleteOrder(orderId: any): Observable<any> {
    return this.http.delete(`${this.apiUrl}/deleteOrder/${orderId}`);
  }

  // Get order details by ID
  getOrderById(orderId: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/order/${orderId}`);
  }
}

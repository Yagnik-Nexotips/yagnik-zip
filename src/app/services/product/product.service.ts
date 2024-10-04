import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiUrl = 'http://localhost:4002/product';

  constructor(private http: HttpClient) {}

  private selectedCarSource = new BehaviorSubject<any>(null);
  selectedCar$ = this.selectedCarSource.asObservable();

  selectCar(car: any): void {
    console.log('Selected car:', car); // Log the selected car
    this.selectedCarSource.next(car);
  }

  addCar(car: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/addProducts`, car);
  }

  updateCar(carId: string, car: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/products/${carId}`, car);
  }

  getAllProducts(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/allProducts`);
  }

  deleteProduct(productId: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/productDelete/${productId}`);
  }
}

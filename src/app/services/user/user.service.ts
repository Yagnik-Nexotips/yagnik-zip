import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = 'http://localhost:4002/user';

  constructor(
    private http: HttpClient,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  private selectedUserSource = new BehaviorSubject<any>(null);
  selectedUser$ = this.selectedUserSource.asObservable();

  private getToken(): string | null {
    if (isPlatformBrowser(this.platformId)) {
      return localStorage.getItem('token');
    }
    return null;
  }

  private setHeaders(): HttpHeaders {
    const token = this.getToken();
    let headers = new HttpHeaders();
    if (token) {
      headers = headers.set('Authorization', `Bearer ${token}`);
    }
    return headers;
  }

  public async register(value: any): Promise<Observable<any>> {
    return await this.http.post(`${this.apiUrl}/signup`, value).pipe(
      tap((response: any) => {
        if (isPlatformBrowser(this.platformId)) {
          localStorage.setItem('RegiterData', JSON.stringify(response));
        }
      })
    );
  }

  public login(value: any): Observable<any> {
    return this.http
      .post(`${this.apiUrl}/login`, value, { withCredentials: true })
      .pipe(
        tap((response: any) => {
          if (isPlatformBrowser(this.platformId)) {
            localStorage.setItem('token', response.token);
          }
        })
      );
  }

  selectUser(user: any): void {
    this.selectedUserSource.next(user);
  }

  public getAllUsers(): Observable<any> {
    return this.http
      .get(`${this.apiUrl}/allUser`, {
        headers: this.setHeaders(),
        withCredentials: true,
      })
      .pipe(tap((response: any) => {}));
  }
}

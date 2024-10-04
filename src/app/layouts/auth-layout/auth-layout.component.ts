import { Component } from '@angular/core';
import { LoginComponent } from '../../login-pages/login/login.component';
import { RegistrationComponent } from '../../login-pages/registration/registration.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-auth-layout',
  standalone: true,
  imports: [LoginComponent, RegistrationComponent, RouterOutlet],
  templateUrl: './auth-layout.component.html',
  styleUrl: './auth-layout.component.scss',
})
export class AuthLayoutComponent {}

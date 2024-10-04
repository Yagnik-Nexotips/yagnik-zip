import { Component } from '@angular/core';
import { RegistrationComponent } from '../registration/registration.component';
import { Router, RouterLink } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { UserService } from '../../services/user/user.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RegistrationComponent, RouterLink, ReactiveFormsModule, NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  loginForm!: FormGroup;
  errorMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.userService.login(this.loginForm.value).subscribe(
        (res) => {
          // Handle successful login
          console.log('Login successful', res);

          if (res.user.isAdmin) {
            // Redirect to admin dashboard
            this.router.navigate(['/admin']); // Adjust route as necessary
          } else {
            // Redirect to normal user dashboard
            this.router.navigate(['/']); // Adjust route as necessary
          }
        },
        (error) => {
          // Handle login failure
          if (error.status === 400) {
            this.errorMessage = 'Invalid email or password.';
          } else {
            this.errorMessage = 'An error occurred. Please try again.';
          }
          console.error('Login failed', error);
        }
      );
    }
  }
}

import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './componts/header/header.component';
import { LoginComponent } from './login-pages/login/login.component';
import { RegistrationComponent } from './login-pages/registration/registration.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { FooterComponent } from './componts/footer/footer.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { BrowseCarsComponent } from './pages/browse-cars/browse-cars.component';
import { ServiceComponent } from './pages/service/service.component';
import { CommonModule } from '@angular/common';
import { ManageCarsComponent } from './admin/manage-cars/manage-cars.component';
import { BookTestDriveComponent } from './componts/book-test-drive/book-test-drive.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    LoginComponent,
    RegistrationComponent,
    HomePageComponent,
    FooterComponent,
    AboutUsComponent,
    ContactUsComponent,
    BrowseCarsComponent,
    ServiceComponent,
    RouterLink,
    RouterLinkActive,
    CommonModule,
    ManageCarsComponent,
    BookTestDriveComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'car-website';
}

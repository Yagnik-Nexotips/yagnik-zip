import { Component } from '@angular/core';
import { HeaderComponent } from '../../componts/header/header.component';
import { FooterComponent } from '../../componts/footer/footer.component';
import { HomePageComponent } from '../../pages/home-page/home-page.component';
import { AboutUsComponent } from '../../pages/about-us/about-us.component';
import { BrowseCarsComponent } from '../../pages/browse-cars/browse-cars.component';
import { ContactUsComponent } from '../../pages/contact-us/contact-us.component';
import { ServiceComponent } from '../../pages/service/service.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    HomePageComponent,
    AboutUsComponent,
    BrowseCarsComponent,
    ContactUsComponent,
    ServiceComponent,
    RouterOutlet,
  ],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss',
})
export class MainLayoutComponent {}

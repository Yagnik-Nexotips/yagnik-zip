import { Component } from '@angular/core';
import { HeroComponent } from './hero/hero.component';
import { FeaturedCarsComponent } from './featured-cars/featured-cars.component';
import { WhyChooseUsComponent } from './why-choose-us/why-choose-us.component';
import { LatestModelsComponent } from './latest-models/latest-models.component';
import { FooterComponent } from '../../componts/footer/footer.component';
import { HeaderComponent } from '../../componts/header/header.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    HeroComponent,
    FeaturedCarsComponent,
    WhyChooseUsComponent,
    LatestModelsComponent,
    FooterComponent,
    HeaderComponent,
    RouterOutlet,
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {}

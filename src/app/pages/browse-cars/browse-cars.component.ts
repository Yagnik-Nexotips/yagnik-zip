import { Component } from '@angular/core';
import { FilterSearchSectionComponent } from './filter-search-section/filter-search-section.component';
import { CarListingsComponent } from './car-listings/car-listings.component';

@Component({
  selector: 'app-browse-cars',
  standalone: true,
  imports: [FilterSearchSectionComponent, CarListingsComponent],
  templateUrl: './browse-cars.component.html',
  styleUrl: './browse-cars.component.scss',
})
export class BrowseCarsComponent {}

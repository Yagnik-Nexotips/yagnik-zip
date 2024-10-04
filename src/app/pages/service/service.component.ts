import { Component } from '@angular/core';
import { ServiceHeroComponent } from './service-hero/service-hero.component';
import { ServicesOverviewComponent } from './services-overview/services-overview.component';

@Component({
  selector: 'app-service',
  standalone: true,
  imports: [ServiceHeroComponent, ServicesOverviewComponent],
  templateUrl: './service.component.html',
  styleUrl: './service.component.scss',
})
export class ServiceComponent {}

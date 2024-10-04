import { Component } from '@angular/core';
import { ContactUsHeroComponent } from './contact-us-hero/contact-us-hero.component';
import { FaqSectionComponent } from './faq-section/faq-section.component';
import { ContactFormSectionComponent } from './contact-form-section/contact-form-section.component';
import { HeaderComponent } from '../../componts/header/header.component';
import { FooterComponent } from '../../componts/footer/footer.component';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [
    ContactUsHeroComponent,
    FaqSectionComponent,
    ContactFormSectionComponent,
    HeaderComponent,
    FooterComponent,
  ],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss',
})
export class ContactUsComponent {}

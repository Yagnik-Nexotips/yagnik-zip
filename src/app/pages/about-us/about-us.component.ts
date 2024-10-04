import { Component } from '@angular/core';
import { AboutHeroComponent } from './about-hero/about-hero.component';
import { OurMissionComponent } from './our-mission/our-mission.component';
import { WhyChooseUsComponent } from '../home-page/why-choose-us/why-choose-us.component';
import { MeetTheTeamComponent } from './meet-the-team/meet-the-team.component';
import { OurJourneyComponent } from './our-journey/our-journey.component';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [
    AboutHeroComponent,
    OurMissionComponent,
    WhyChooseUsComponent,
    MeetTheTeamComponent,
    OurJourneyComponent,
  ],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss',
})
export class AboutUsComponent {}

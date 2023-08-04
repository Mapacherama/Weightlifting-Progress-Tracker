import { Component } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent {
  title = 'Welcome to Weightlifting Progress Tracker!';
  description = 'Track your workouts, monitor your nutrition, and see your progress over time.';
}

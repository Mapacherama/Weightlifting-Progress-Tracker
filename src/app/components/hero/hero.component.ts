import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
  headline = 'Embrace the Mindset, Take Command of Your Body...';
  subheadline = 'Track your weightlifting workouts, nutrition, and overall progress with our powerful Angular-based platform.';
  ctaText = 'Get Started';

  constructor() { }

  ngOnInit(): void {
  }
  yourFunction(): void {
  }
}

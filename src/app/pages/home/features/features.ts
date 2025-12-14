import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Feature {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './features.html',
  styleUrls: ['./features.css']
})
export class Features {

  features: Feature[] = [
  { icon: 'bi-house-fill', title: 'Easy Booking', description: 'Book a car instantly with just a few steps.' },
  { icon: 'bi-gear-fill', title: 'Best Quality', description: 'Well-maintained and high-quality vehicles.' },
  { icon: 'bi-clock-fill', title: '24/7 Availability', description: 'Rent anytime with our round-the-clock service.' },
  { icon: 'bi-shield-lock-fill', title: 'Secure Service', description: 'Your safety and privacy are always protected.' },
  { icon: 'bi-file-earmark-text-fill', title: 'Simple Process', description: 'No complicated paperwork or delays.' },
  { icon: 'bi-key-fill', title: 'Instant Pickup', description: 'Grab your rented car in minutes.' }
];

}

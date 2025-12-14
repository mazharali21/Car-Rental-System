import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface FAQ {
  question: string;
  answer: string;
  open: boolean;
}

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './faq.html',
  styleUrls: ['./faq.css']
})
export class Faq {

  faqs: FAQ[] = [
    {
      question: 'How do I rent a car?',
      answer: 'You can rent a car by selecting your preferred vehicle, filling the booking form, and completing payment.',
      open: false
    },
    {
      question: 'What documents are required?',
      answer: 'You need a valid driving license and a government-issued ID.',
      open: false
    },
    {
      question: 'Can I cancel my booking?',
      answer: 'Yes, bookings can be cancelled before pickup time according to our cancellation policy.',
      open: false
    },
    {
      question: 'Is fuel included in the rental price?',
      answer: 'Fuel cost is not included. You pay only for the fuel you use.',
      open: false
    },
    {
      question: 'Do you provide customer support?',
      answer: 'Yes, our support team is available 24/7 for assistance.',
      open: false
    }
  ];

  toggle(index: number) {
    this.faqs[index].open = !this.faqs[index].open;
  }
}

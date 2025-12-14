import { Component } from '@angular/core';
import { HowItWorks } from './how-it-works/how-it-works';
import { Features } from './features/features';
import { Hero } from './hero/hero';
import { Promo } from './promo/promo';
import { CarShowcase } from './car-showcase/car-showcase';
import { Faq } from './faq/faq';

@Component({
  selector: 'app-home',
  imports: [HowItWorks, Features, Hero, Features, Promo, CarShowcase, Faq],
  standalone : true,
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
})

export class Home {

}


import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Car {
  name: string;
  price: string;
  luggage: number;
  doors: number;
  passenger: number;
  image: string;
}

@Component({
  selector: 'app-car-showcase',
  imports: [CommonModule],
  templateUrl: './car-showcase.html',
  styleUrls: ['./car-showcase.css']
})

export class CarShowcase {
  cars: Car[] = [
    {
      name: "Mitsubishi Pajero",
      price: "$389.00 / day",
      luggage: 8,
      doors: 4,
      passenger: 4,
      image: "asset/car.jpg"
    },
    {
      name: "Nissan Moco",
      price: "$389.00 / day",
      luggage: 8,
      doors: 4,
      passenger: 4,
      image: "asset/car.jpg"
    },
    {
      name: "Honda Fitta",
      price: "$389.00 / day",
      luggage: 8,
      doors: 4,
      passenger: 4,
      image: "asset/car.jpg"
    },
    {
      name: "Skoda Laura",
      price: "$389.00 / day",
      luggage: 8,
      doors: 4,
      passenger: 4,
      image: "asset/car.jpg"
    },
    {
      name: "Mazda LaPuta",
      price: "$389.00 / day",
      luggage: 8,
      doors: 4,
      passenger: 4,
      image: "asset/car.jpg"
    },
    {
      name: "Buick LaCrosse",
      price: "$389.00 / day",
      luggage: 8,
      doors: 4,
      passenger: 4,
      image: "asset/car.jpg"
    }
  ];
}


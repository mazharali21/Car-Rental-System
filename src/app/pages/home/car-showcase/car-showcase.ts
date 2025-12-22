import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { RouterLink } from '@angular/router';

interface Car {
  id: number;
  name: string;
  pricePerDay: number;
  luggage: number;
  doors: number;
  passengers: number;
  imageUrl: string;
}

@Component({
  selector: 'app-car-showcase',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './car-showcase.html',
  styleUrls: ['./car-showcase.css']
})
export class CarShowcase implements OnInit {

  cars: Car[] = [];

  private apiUrl = 'https://localhost:7152/api/Car';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchCars();
  }

  fetchCars(): void {
    this.http.get<Car[]>(this.apiUrl).subscribe({
      next: (data) => {
        this.cars = data;
        console.log('Cars loaded:', data);
      },
      error: (err) => {
        console.error('API Error:', err);
      }
    });
  }
}

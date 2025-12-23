import { CommonModule, NgFor } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component , OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-booking',
  standalone : true,
  imports: [CommonModule, FormsModule],
  templateUrl: './booking.html',
  styleUrl: './booking.css',
})
export class Booking {

  carName = " ";

  bookingData = {
    fullName : "",
    email : "",
    phone : "",
    startDate : "",
    endDate : "",
  };

  message =  ' ';

  private apiUrl = "https://localhost:7152/api/Booking";

  constructor(
    private http : HttpClient,
    private route : ActivatedRoute
  ){}

  ngOnInit() : void {
    this.carName = this.route.snapshot.paramMap.get("carName") || "";
  }

  submitBooking(form : NgForm){
    const payload = {
      carName : this.carName,
      ...this.bookingData 
    };

    this.http.post(this.apiUrl, payload).subscribe({
      next: ()=>{
        this.message = `${this.carName} is rented to ${this.bookingData.fullName}`;
        form.resetForm();
      },
      error : (err)=>{
        console.log("Error : " , err)
        this.message = "Booking failed. Try again."
      }
    })

  }


}

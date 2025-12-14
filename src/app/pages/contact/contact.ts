import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Data {
  name : string,
  email : string,
  message : string
}

@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {

    formData : Data = {
      name : "",
      email : "",
      message : ""
    }

    submitForm(){
      console.log(this.formData);
      alert("Message sent successfully");
      this.formData = {name : "", email : "", message : ""}
    }

}

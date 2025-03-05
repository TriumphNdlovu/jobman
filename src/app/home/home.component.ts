import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  imports: [
    CommonModule,
    FormsModule
  ],
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  skills: string = '';
  interests: string = '';
  educationLevel: string = 'bachelors';
  location: string = '';
  isLoading: boolean = false;

  onSubmit() {
    this.isLoading = true;

    // Simulate API call or processing time
    setTimeout(() => {
      this.isLoading = false;
      // Process the form data and show career suggestions
      alert('Form submitted! Show career suggestions here.');
    }, 2000); // Simulated delay
  }
}

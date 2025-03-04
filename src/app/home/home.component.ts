import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  skills: string = '';
  interests: string = '';
  educationLevel: string = '';
  location: string = '';

  constructor(public router: Router) {}

  onSubmit() {
    const userInput = {
      skills: this.skills,
      interests: this.interests,
      educationLevel: this.educationLevel,
      location: this.location
    };
    this.router.navigate(['/results'], { state: { data: userInput } });
  }
}

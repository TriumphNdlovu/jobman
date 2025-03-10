import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface CareerSuggestion {
  role: string;
  description: string;
  whyItFits: string;
}

@Component({
  imports: [CommonModule],
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent {
  careerSuggestions: CareerSuggestion[] = [];

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    const state = navigation?.extras.state as { response?: { careerSuggestions: CareerSuggestion[] } };
    const response = state?.response?.careerSuggestions;

    if (Array.isArray(response)) {
      this.careerSuggestions = response;
    } else {
      console.warn('No valid career suggestions received');
    }

    console.log(this.careerSuggestions); // Logs only the array of suggestions
  }

  searchAgain() {
    this.router.navigate(['/search']);
  }

  goBack() {
    this.router.navigate(['/']);
  }
}

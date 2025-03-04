import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-results',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent {
  userInput: any;
  careerSuggestions: string[] = ['Software Developer', 'Data Scientist'];
  jobApplications: string[] = ['https://example.com/job1', 'https://example.com/job2'];

  constructor(public router: Router) {
    this.userInput = this.router.getCurrentNavigation()?.extras.state?.['data'];
  }
}

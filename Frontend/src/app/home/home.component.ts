import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
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

export class HomeComponent implements OnInit {
  fullName: string = '';
  skills: string = '';
  interests: string = '';
  experienceLevel: string = 'entry';
  educationLevel: string = 'high-school';
  softSkills: string = '';
  certifications: string = '';
  highestQualification: string = '';

  isLoading: boolean = false;
  errorMessage: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
      this.fullName = '';
      this.skills = '';
      this.interests = '';
      this.experienceLevel = 'entry';
      this.educationLevel = 'high-school';
      this.softSkills = '';
      this.certifications = '';
      this.highestQualification = '';

      this.isLoading = false;
      this.errorMessage = '';
  }
  getCareerSuggestions() {
    return this.http.post('https://jobman-tfev.onrender.com/career-suggestions', {
      fullName: this.fullName || '',
      skills: this.skills || '',
      interests: this.interests || '',
      experienceLevel: this.experienceLevel || 'entry',
      educationLevel: this.educationLevel || 'high-school',
      softSkills: this.softSkills || '',
      certifications: this.certifications || '',
      highestQualification: this.highestQualification || ''
    });
  }

  onSubmit(form: NgForm) {
    if (form.invalid) {
      this.errorMessage = 'Please fill out all required fields correctly.';
      return;
    }

    this.isLoading = true;
    this.errorMessage = '';

    this.getCareerSuggestions().subscribe({
      next: (response) => {
        this.isLoading = false;
        this.router.navigate(['/results'], { state: { response } });
      },
      error: (error) => {
        this.isLoading = false;
        this.errorMessage = 'Failed to get career suggestions. Please try again later.';
        console.error('API Error:', error);
      }
    });
  }
}

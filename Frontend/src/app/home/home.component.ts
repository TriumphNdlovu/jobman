import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
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
  fullName: string = '';
  skills: string = '';
  interests: string = '';
  experienceLevel: string = 'entry';
  educationLevel: string = 'high-school';
  softSkills: string = '';
  certifications: string = '';
  highestQualification: string = '';

  isLoading: boolean = false;



  constructor(private http: HttpClient, private router:Router) { }


  getCareerSuggestions() {
    return this.http.post('https://jobman-tfev.onrender.com/career-suggestions',
    {
      fullName: this.fullName,
      skills: this.skills,
      interests: this.interests,
      experienceLevel: this.experienceLevel,
      educationLevel: this.educationLevel,
      softSkills: this.softSkills,
      certifications: this.certifications,
      highestQualification: this.highestQualification
    }
    );
  }

  onSubmit() {
    this.isLoading = true;
    this.getCareerSuggestions().subscribe({
      next: (response) => {
        this.isLoading = false;
        this.router.navigate(['/results'], { state: { response } });
      },
      error: (error) => {
        this.isLoading = false;
        console.error('Failed to get career suggestions:', error);
      }
    });
  }

}

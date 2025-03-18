import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [
    FormsModule,
    CommonModule
  ],
  selector: 'app-cv-review',
  templateUrl: './cv-review.component.html',
  styleUrls: ['./cv-review.component.css']
})
export class CvReviewComponent {
  selectedFile: File | null = null;
  cvScore: number | null = null;
  feedback: string = '';
  loading: boolean = false;

  // Handle file selection
  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file && file.type === 'application/pdf') {
      this.selectedFile = file;
    } else {
      alert('Please upload a valid PDF file.');
    }
  }

  // Upload and process CV
  uploadCV() {
    if (!this.selectedFile) {
    alert("Please upload a CV first.");
    return;
  }

  const formData = new FormData();
  formData.append("cv", this.selectedFile);
  this.loading = true;
  fetch("http://localhost:5000/cvupload", {

    method: "POST",
    body: formData
  })
    .then(response => response.json())
    .then(data => {
      this.cvScore = data.score;
      this.feedback = data.feedback;
      this.loading = false;

    })
    .catch(error =>
      {
        console.error("Error:", error);
        this.loading = false;
      });
  }
}

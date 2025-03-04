import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';  // Import CommonModule for common Angular directives like ngIf, ngFor
import { ResultsComponent } from './results.component'; // Your ResultsComponent
import { ButtonComponent } from '../button/button.component'; // Import the ButtonComponent if used in ResultsComponent

@NgModule({
  declarations: [
    ResultsComponent,  // Declare the ResultsComponent for this module
    ButtonComponent    // Declare ButtonComponent if it is used in this module
  ],
  imports: [
    CommonModule      // Import CommonModule to use common Angular directives like ngIf, ngFor, etc.
  ],
  exports: [
    ResultsComponent  // Export the ResultsComponent if you want to use it in other modules (optional)
  ]
})
export class ResultsModule { }

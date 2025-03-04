import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';  // Angular common module for directives like ngIf, ngFor
import { HomeComponent } from './home.component'; // Your HomeComponent
import { ButtonComponent } from '../button/button.component'; // Import the ButtonComponent

@NgModule({
  declarations: [
    HomeComponent,  // Declare the HomeComponent
    ButtonComponent // Declare the ButtonComponent
  ],
  imports: [
    CommonModule  // Import CommonModule for common directives like ngIf, ngFor, etc.
  ],
  exports: [
    HomeComponent  // Export HomeComponent if you want to use it in other modules (optional)
  ]
})
export class HomeModule { }

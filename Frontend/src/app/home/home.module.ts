import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';  // Angular common module for directives like ngIf, ngFor
import { HomeComponent } from './home.component'; // Your HomeComponent
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,  // Import CommonModule for common directives like ngIf, ngFor, etc.
    FormsModule,
    HomeComponent
  ],
  exports: [
    HomeComponent  // Export HomeComponent if you want to use it in other modules (optional)
  ]
})
export class HomeModule { }

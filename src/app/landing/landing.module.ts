import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';  // CommonModule for ngIf, ngFor, etc.
import { LandingComponent } from './landing.component'; // Your landing component
import { ButtonComponent } from '../button/button.component';  // Import ButtonComponent

@NgModule({
  declarations: [
    LandingComponent
  ],
  imports: [
    CommonModule,
    ButtonComponent
  ],
  exports: [ LandingComponent ]
})
export class LandingModule { }

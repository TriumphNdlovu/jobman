import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultsComponent } from './results.component'

@NgModule({
  imports: [CommonModule, ResultsComponent], // Add this if it's missing
})
export class ResultsModule {}

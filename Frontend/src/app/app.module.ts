import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HomeModule } from './home/home.module';  // Import HomeModule
import { ResultsModule } from './results/results.module';  // Import ResultsModule
import { LandingModule } from './landing/landing.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { provideHttpClient } from '@angular/common/http';
@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    HomeModule,
    LandingModule,
    ResultsModule,
    FormsModule,
    CommonModule,
  ],
  providers: [provideHttpClient()],           // Define any services if needed here
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';  // Root component of the application
import { ButtonModule } from './button/button.module';  // Import ButtonModule
import { HomeModule } from './home/home.module';  // Import HomeModule
import { ResultsModule } from './results/results.module';  // Import ResultsModule
import { LandingModule } from './landing/landing.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
@NgModule({
  declarations: [
    AppComponent,
    BrowserModule,
    ButtonModule,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    ButtonModule,
    HomeModule,
    LandingModule,
    ResultsModule,
    FormsModule,
    CommonModule,
  ],
  providers: [],           // Define any services if needed here
  bootstrap: [AppComponent] // Bootstrap the AppComponent (root component)
})
export class AppModule { }

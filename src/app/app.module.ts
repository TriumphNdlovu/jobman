import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';  // Root component of the application
import { ButtonModule } from './button/button.module';  // Import ButtonModule
import { HomeModule } from './home/home.module';  // Import HomeModule
import { ResultsModule } from './results/results.module';  // Import ResultsModule
import { LandingModule } from './landing/landing.module';

@NgModule({
  declarations: [
    AppComponent  // Declare your root AppComponent
  ],
  imports: [
    BrowserModule,       // BrowserModule is required for any Angular app
    ButtonModule,        // Import ButtonModule to use ButtonComponent
    HomeModule,
    LandingModule,
    ResultsModule       // Import ResultsModule for the results page
  ],
  providers: [],           // Define any services if needed here
  bootstrap: [AppComponent] // Bootstrap the AppComponent (root component)
})
export class AppModule { }

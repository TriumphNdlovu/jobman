import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ResultsComponent } from './results/results.component';
import { LandingComponent } from './landing/landing.component';

export const routes: Routes = [
  { path: '', component: LandingComponent},
  { path: 'home', component: HomeComponent },
  { path: 'results', component: ResultsComponent },
  { path: '**', redirectTo: '' }
];

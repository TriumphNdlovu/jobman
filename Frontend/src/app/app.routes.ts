import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ResultsComponent } from './results/results.component';
import { LandingComponent } from './landing/landing.component';
import { HomeHomeComponent } from './home-home/home-home.component';
import { CvReviewComponent } from './cv-review/cv-review.component';

export const routes: Routes = [
  { path: '', component: LandingComponent},
  { path: 'home', component: HomeComponent },
  { path: 'results', component: ResultsComponent },
  { path: 'home-home', component: HomeHomeComponent },
  { path: 'cv-review', component: CvReviewComponent },
  { path: '**', redirectTo: '' }
];

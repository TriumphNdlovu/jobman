import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-results',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  careerSuggestions: string[] = [];

  constructor(public router: Router) {}

  ngOnInit() {

    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras.state) {
      this.careerSuggestions = navigation.extras.state['response'];
    }
  }

}

import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-movie-upcoming-page',
  standalone: true,
  imports: [MatGridListModule, MatCardModule],
  templateUrl: './movie-upcoming-page.component.html',
  styleUrl: './movie-upcoming-page.component.scss',
})
export class MovieUpcomingPage {
  cards = Array.from({ length: 20 }, (_, i) => i + 1);
}

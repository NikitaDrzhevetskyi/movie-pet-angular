import { Component, OnInit } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { IMovie } from '../../interfaces/movie.interface';
import { MovieService } from '../../services/movie.service';
import { MovieListComponent } from '../../components/movie-list/movie-list.component';
import { MovieCardComponent } from '../../components/movie-card/movie-card.component';
import { upcomingMovies } from '../../mock-data/upcoming-moveis';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-movie-upcoming-page',
  standalone: true,
  imports: [
    MatGridListModule,
    MatCardModule,
    MovieListComponent,
    MovieCardComponent,
    CommonModule,
  ],
  templateUrl: './movie-upcoming-page.component.html',
  styleUrl: './movie-upcoming-page.component.scss',
})
export class MovieUpcomingPage implements OnInit {
  upcomingMovies: IMovie[] = [];

  constructor(private movieService: MovieService) {}

  ngOnInit() {
    this.upcomingMovies = this.movieService.getUpcomingMovies();
  }
}

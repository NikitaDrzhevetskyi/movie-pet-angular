import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { MovieListComponent } from '../../components/movie-list/movie-list.component';
import { IMovie } from '../../interfaces/movie.interface';

@Component({
  selector: 'app-movies-top-rating-page',
  standalone: true,
  imports: [MovieListComponent],
  templateUrl: './movies-top-rating-page.component.html',
  styleUrl: './movies-top-rating-page.component.scss',
})
export class MoviesTopRatingPage implements OnInit {
  topRatedMovies: IMovie[] = [];

  constructor(private movieService: MovieService) {}

  ngOnInit() {
    this.topRatedMovies = this.movieService.getTopRatedMovies();
  }
}

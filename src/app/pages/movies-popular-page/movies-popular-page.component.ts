import { Component } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { IMovie } from '../../interfaces/movie.interface';
import { MovieListComponent } from "../../components/movie-list/movie-list.component";

@Component({
  selector: 'app-movies-popular-page',
  standalone: true,
  imports: [MovieListComponent],
  templateUrl: './movies-popular-page.component.html',
  styleUrl: './movies-popular-page.component.scss',
})
export class MoviesPopularPage {
  popularMovies: IMovie[] = [];
  constructor(private movieService: MovieService) {}

  ngOnInit() {
    this.popularMovies = this.movieService.getPopularMovies();
  }
}

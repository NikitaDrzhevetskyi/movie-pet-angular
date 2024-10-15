import { Component, OnInit } from '@angular/core';
import { MovieListComponent } from '../../components/movie-list/movie-list.component';
import { MovieService } from '../../services/movie.service';
import { ActivatedRoute } from '@angular/router';
import { IMovie } from '../../interfaces/movie.interface';
import { allMovies } from '../../mock-data/movies-data';
import { popularMovies } from '../../mock-data/popular-movies';
import { topRatedMovies } from '../../mock-data/top-rated-movies';

@Component({
  selector: 'app-movie-details-page',
  standalone: true,
  imports: [MovieListComponent],
  templateUrl: './movie-details-page.component.html',
  styleUrls: ['./movie-details-page.component.scss'],
})
export class MovieDetailsPage implements OnInit {
  allMovies = [...allMovies, ...popularMovies, ...topRatedMovies];
  findedMovieDetails: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const movieTitle = params['title'];
      this.findedMovieDetails = this.allMovies.find(
        (el) => el.title === movieTitle
      );
    });
  }
}

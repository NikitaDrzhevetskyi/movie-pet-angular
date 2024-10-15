import { Component, OnInit } from '@angular/core';
import { MovieListComponent } from '../../components/movie-list/movie-list.component';
import { MovieService } from '../../services/movie.service';
import { IMovie } from '../../interfaces/movie.interface'; // Імпорт інтерфейсу фільму

@Component({
  selector: 'app-all-movies-page',
  standalone: true,
  imports: [MovieListComponent],
  templateUrl: './all-movies-page.component.html',
  styleUrl: './all-movies-page.component.scss',
})
export class AllMoviesPage implements OnInit {
  allMovies: IMovie[] = [];

  constructor(private movieService: MovieService) {}

  ngOnInit() {
    this.allMovies = this.movieService.getAllMovies();
  }
}

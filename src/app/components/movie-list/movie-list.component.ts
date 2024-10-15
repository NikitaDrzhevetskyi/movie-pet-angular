import { Component, Input } from '@angular/core';
import { MovieCardComponent } from '../movie-card/movie-card.component';
import { CommonModule } from '@angular/common';
import { IMovie } from '../../interfaces/movie.interface';
import { MatGridListModule } from '@angular/material/grid-list';
import { allMovies } from '../../mock-data/movies-data';

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [CommonModule, MovieCardComponent, MatGridListModule],
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss'],
})
export class MovieListComponent {
  @Input() movies!: IMovie[];
}

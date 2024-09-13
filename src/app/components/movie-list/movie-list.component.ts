import { Component } from '@angular/core';
import { MovieCardComponent } from '../movie-card/movie-card.component';
import { CommonModule } from '@angular/common';
import { IMovieCard } from '../../interfaces/movie.interface';
import { movies } from '../../mock-data/movies-data';
import { MatGridListModule } from '@angular/material/grid-list';

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [CommonModule, MovieCardComponent, MatGridListModule],
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss'],
})
export class MovieListComponent {
  public movieData: IMovieCard[] = movies;
  public favoriteList: string[] = [];
  public watchList: string[] = [];

  handleAddToFavorites(title: string): void {
    //console.log(this.movieData);
    if (!this.favoriteList.includes(title)) {
      this.favoriteList.push(title);
    }
  }

  handleAddToWatchList(title: string): void {
    if (!this.watchList.includes(title)) {
      this.watchList.push(title);
    }
  }

  handleRemoveFromFavorites(title: string): void {
    this.favoriteList = this.favoriteList.filter((fav) => fav !== title);
  }
  handleRemoveFromWatchList(title: string): void {
    this.watchList = this.watchList.filter((fav) => fav !== title);
  }
}

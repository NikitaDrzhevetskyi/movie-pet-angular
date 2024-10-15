import { Injectable } from '@angular/core';
import { allMovies } from '../mock-data/movies-data';
import { popularMovies } from '../mock-data/popular-movies';
import { topRatedMovies } from '../mock-data/top-rated-movies';
import { upcomingMovies } from '../mock-data/upcoming-moveis';
import { IMovie } from '../interfaces/movie.interface';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  allMovies = [
    new Set([...allMovies, popularMovies, topRatedMovies, upcomingMovies]),
  ];
  private watchList: IMovie[] = [];
  private favoriteList: IMovie[] = [];

  constructor() {}

  getAllMovies() {
    return allMovies;
  }
  getPopularMovies() {
    return popularMovies;
  }
  getTopRatedMovies() {
    return topRatedMovies;
  }
  getUpcomingMovies() {
    return upcomingMovies;
  }
  setWatchList(movie: IMovie): void {
    const movieIndex = this.watchList.findIndex((m) => m.title === movie.title);

    if (movieIndex === -1) {
      this.watchList.push(movie);
    } else {
      this.watchList.splice(movieIndex, 1);
    }
  }
  getWatchList(): IMovie[] {
    return this.watchList;
  }
  isInWatchList(movie: IMovie): boolean {
    return this.watchList.some((m) => m.title === movie.title);
  }
  setFavoriteList(movie: IMovie): void {
    const movieIndex = this.favoriteList.findIndex(
      (m) => m.title === movie.title
    );

    if (movieIndex === -1) {
      this.favoriteList.push(movie);
    } else {
      this.favoriteList.splice(movieIndex, 1);
    }
  }
  getFavoriteList() {
    return this.favoriteList;
  }
  isInFavoriteList(movie: IMovie): boolean {
    return this.favoriteList.some((m) => m.title === movie.title);
  }
}

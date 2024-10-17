import { Routes } from '@angular/router';
import { NotFoundPage } from './pages/not-found-page/not-found-page.component';
import { AllMoviesPage } from './pages/all-movies-page/all-movies-page.component';
import { FavoritesPage } from './pages/favorite-list/favorites-page.component';
import { MovieUpcomingPage } from './pages/movie-upcoming-page/movie-upcoming-page.component';
import { MoviesTopRatingPage } from './pages/movies-top-rating-page/movies-top-rating-page.component';
import { MoviesPopularPage } from './pages/movies-popular-page/movies-popular-page.component';
import { WatchListPage } from './pages/watch-list/watch-list.component';
import { MovieDetailsPage } from './pages/movie-details-page/movie-details-page.component';

export const routes: Routes = [
  { path: '', redirectTo: '/all-movies', pathMatch: 'full' },
  { path: 'all-movies', component: AllMoviesPage },
  { path: 'upcoming', component: MovieUpcomingPage },
  { path: 'popular', component: MoviesPopularPage },
  { path: 'top-rating', component: MoviesTopRatingPage },

  { path: 'movie/:movieId', component: MovieDetailsPage },
  { path: 'favorites', component: FavoritesPage },
  { path: 'watch-list', component: WatchListPage },

  { path: '**', component: NotFoundPage },
];

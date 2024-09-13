import { Routes } from '@angular/router';
import { NotFoundPage } from './pages/not-found-page/not-found-page.component';
import { AllMoviesPage } from './pages/all-movies-page/all-movies-page.component';
import { FavoritesPage } from './pages/favorites-page/favorites-page.component';
import { MovieUpcomingPage } from './pages/movie-upcoming-page/movie-upcoming-page.component';
import { MoviesTopRatingPage } from './pages/movies-top-rating-page/movies-top-rating-page.component';
import { MoviesPopularPage } from './pages/movies-popular-page/movies-popular-page.component';
import { WatchListPage } from './pages/watch-list/watch-list.component';

export const routes: Routes = [
  { path: '', redirectTo: '/all-movies', pathMatch: 'full' },
  { path: 'all-movies', component: AllMoviesPage },
  { path: 'upcoming', component: MovieUpcomingPage },
  { path: 'popular', component: MoviesPopularPage },
  { path: 'top-rating', component: MoviesTopRatingPage },

  { path: 'favorites', component: FavoritesPage },
  { path: 'watch-list', component: WatchListPage },

  { path: '**', component: NotFoundPage },
];

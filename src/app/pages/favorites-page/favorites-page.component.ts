import { Component } from '@angular/core';
import { IMovieCard } from '../../interfaces/movie.interface';
import { movies } from '../../mock-data/movies-data';
import { MovieCardComponent } from '../../components/movie-card/movie-card.component';
import { CommonModule } from '@angular/common'; // Import CommonModule

@Component({
  selector: 'app-favorites-page',
  standalone: true,
  imports: [MovieCardComponent, CommonModule],
  templateUrl: './favorites-page.component.html',
  styleUrl: './favorites-page.component.scss',
})
export class FavoritesPage {
  public favoriteMovies: string[] = [];


  handleAddToFavorites(title: string): void {
    if (!this.favoriteMovies.includes(title)) {
      this.favoriteMovies.push(title);
    }
  }
}

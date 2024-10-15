import { Component, OnInit } from '@angular/core';
import { IMovie } from '../../interfaces/movie.interface';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { MovieService } from '../../services/movie.service';
import { MatCardModule } from '@angular/material/card';
import { MovieListComponent } from "../../components/movie-list/movie-list.component";

@Component({
  selector: 'app-favorites-page',
  standalone: true,
  imports: [MatCardModule, CommonModule, MovieListComponent],
  templateUrl: './favorites-page.component.html',
  styleUrl: './favorites-page.component.scss',
})
export class FavoritesPage implements OnInit {
  public favoriteList: IMovie[] = [];

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.favoriteList = this.movieService.getFavoriteList();
    //console.log(this.favoriteList);
  }
}

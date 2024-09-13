import { Component } from '@angular/core';
import { MovieListComponent } from "../../components/movie-list/movie-list.component";

@Component({
  selector: 'app-all-movies-page',
  standalone: true,
  imports: [MovieListComponent],
  templateUrl: './all-movies-page.component.html',
  styleUrl: './all-movies-page.component.scss'
})
export class AllMoviesPage {

}

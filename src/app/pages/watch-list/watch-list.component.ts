import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { CommonModule } from '@angular/common';
import { IMovie } from '../../interfaces/movie.interface';
import { MovieListComponent } from '../../components/movie-list/movie-list.component';
@Component({
  selector: 'app-watch-list',
  standalone: true,
  imports: [CommonModule, MovieListComponent],
  templateUrl: './watch-list.component.html',
  styleUrl: './watch-list.component.scss',
})
export class WatchListPage implements OnInit {
  public watchList: IMovie[] = [];

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.watchList = this.movieService.getWatchList();
    //console.log('getWatchList', this.watchList);
  }
}

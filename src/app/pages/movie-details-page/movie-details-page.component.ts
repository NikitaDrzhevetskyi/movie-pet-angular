import { Component, OnInit } from '@angular/core';
import { MovieListComponent } from '../../components/movie-list/movie-list.component';
import { MovieService } from '../../services/movie.service';
import { ActivatedRoute } from '@angular/router';
import { IMovie } from '../../interfaces/movie.interface';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MovieCardComponent } from '../../components/movie-card/movie-card.component';
import { CurrencyPipe } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatCommonModule } from '@angular/material/core';
import { MatIcon } from '@angular/material/icon';
import { TransformTimePipe } from '../../pipes/transform-time.pipe';

@Component({
  selector: 'app-movie-details-page',
  standalone: true,
  imports: [
    MovieListComponent,
    MatCardModule,
    MatButtonModule,
    MovieCardComponent,
    MatTableModule,
    CurrencyPipe,
    MatCommonModule,
    MatIcon,
    TransformTimePipe,
  ],
  templateUrl: './movie-details-page.component.html',
  styleUrls: ['./movie-details-page.component.scss'],
})
export class MovieDetailsPage {
  public movie!: IMovie | undefined;

  public playButtonSvg: string = 'assets/icons/play.svg';
  public bookmarkEmptySvg: string = 'assets/icons/bookmark-filled.svg';

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService
  ) {}

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const movieIdFromRoute = Number(routeParams.get('movieId'));

    const movie = this.movieService.getMovieById(movieIdFromRoute);
    if (movie) {
      this.movie = movie;
    } else {
      console.error('Movie not found');
    }
  }
}

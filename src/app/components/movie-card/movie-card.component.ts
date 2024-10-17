import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { TransformTimePipe } from '../../pipes/transform-time.pipe';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';
import { IMovie } from '../../interfaces/movie.interface';
import { MovieService } from '../../services/movie.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-movie-card',
  standalone: true,
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.scss',
  imports: [
    MatCardModule,
    MatButtonModule,
    TransformTimePipe,
    MatTooltipModule,
	RouterLink
  ],
})
export class MovieCardComponent implements OnInit {
  public movie: any;

  public isFavorite: boolean = false;
  public isBookmarked: boolean = false;
  public isHoveringBookmark: boolean = false;
  public isHoveringHeart: boolean = false;

  public bookmarkEmptySvg: string = 'assets/icons/bookmark-empty.svg';
  public heartEmptySvg: string = 'assets/icons/heart-empty.svg';
  public filledBookmarkSvg: string = 'assets/icons/bookmark-filled.svg';
  public filledHeartSvg: string = 'assets/icons/heart-filled.svg';
  public playButtonSvg: string = 'assets/icons/play.svg';
  public hoverBookmarkSvg: string = 'assets/icons/bookmark-hover.svg';
  public hoverHeartSvg: string = 'assets/icons/heart-hover.svg';

  constructor(private movieService: MovieService) {}

  @Input() date!: IMovie;

  ngOnInit(): void {
    this.movie = this.date;
    this.isBookmarked = this.movieService.isInWatchList(this.movie);
    this.isFavorite = this.movieService.isInFavoriteList(this.movie);
  }

  setWatchList(): void {
    this.movieService.setWatchList(this.movie);
    this.isBookmarked = !this.isBookmarked;
  }
  setFavoriteList(): void {
    this.movieService.setFavoriteList(this.movie);
    this.isFavorite = !this.isFavorite;
  }

  onHover(iconType: 'bookmark' | 'heart'): void {
    if (iconType === 'bookmark' && !this.isBookmarked) {
      this.isHoveringBookmark = true;
    } else if (iconType === 'heart' && !this.isFavorite) {
      this.isHoveringHeart = true;
    }
  }

  onLeave(iconType: 'bookmark' | 'heart'): void {
    if (iconType === 'bookmark') {
      this.isHoveringBookmark = false;
    } else if (iconType === 'heart') {
      this.isHoveringHeart = false;
    }
  }
}

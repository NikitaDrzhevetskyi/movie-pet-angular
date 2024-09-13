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

  @Input() date: any;
  @Output() addFavorites = new EventEmitter<any>();
  @Output() addWatchList = new EventEmitter<any>();
  @Output() removeFavorites = new EventEmitter<any>();
  @Output() removeWatchList = new EventEmitter<any>();

  ngOnInit(): void {
    this.movie = this.date;
  }

  addToWatchList(): void {
    this.isBookmarked = !this.isBookmarked;
    if (this.isBookmarked) {
      this.addWatchList.emit(this.movie.title);
    } else {
      this.removeWatchList.emit(this.movie.title);
    }
  }

  addToFavorites(): void {
    this.isFavorite = !this.isFavorite;
    if (this.isFavorite) {
      this.addFavorites.emit(this.movie.title);
    } else {
      this.removeFavorites.emit(this.movie.title);
    }
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

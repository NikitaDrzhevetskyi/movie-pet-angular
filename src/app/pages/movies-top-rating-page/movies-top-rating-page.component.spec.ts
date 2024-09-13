import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesTopRatingPage } from './movies-top-rating-page.component';

describe('MoviesTopRatingPageComponent', () => {
  let component: MoviesTopRatingPage;
  let fixture: ComponentFixture<MoviesTopRatingPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoviesTopRatingPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoviesTopRatingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

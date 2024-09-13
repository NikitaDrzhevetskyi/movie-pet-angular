import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieUpcomingPage } from './movie-upcoming-page.component';

describe('MovieUpcomingPageComponent', () => {
  let component: MovieUpcomingPage;
  let fixture: ComponentFixture<MovieUpcomingPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovieUpcomingPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieUpcomingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

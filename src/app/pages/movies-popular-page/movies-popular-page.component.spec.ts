import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesPopularPage } from './movies-popular-page.component';

describe('MoviesPopularPageComponent', () => {
  let component: MoviesPopularPage;
  let fixture: ComponentFixture<MoviesPopularPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoviesPopularPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoviesPopularPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllMoviesPage } from './all-movies-page.component';

describe('AllMoviesPageComponent', () => {
  let component: AllMoviesPage;
  let fixture: ComponentFixture<AllMoviesPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllMoviesPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllMoviesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

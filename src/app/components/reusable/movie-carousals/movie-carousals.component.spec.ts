import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieCarousalsComponent } from './movie-carousals.component';

describe('MovieCarousalsComponent', () => {
  let component: MovieCarousalsComponent;
  let fixture: ComponentFixture<MovieCarousalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovieCarousalsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MovieCarousalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewsReviewItemComponent } from './reviews-review-item.component';

describe('ReviewsReviewItemComponent', () => {
  let component: ReviewsReviewItemComponent;
  let fixture: ComponentFixture<ReviewsReviewItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReviewsReviewItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewsReviewItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

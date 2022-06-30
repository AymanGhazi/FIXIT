import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardReviewItemComponent } from './dashboard-review-item.component';

describe('DashboardReviewItemComponent', () => {
  let component: DashboardReviewItemComponent;
  let fixture: ComponentFixture<DashboardReviewItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardReviewItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardReviewItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

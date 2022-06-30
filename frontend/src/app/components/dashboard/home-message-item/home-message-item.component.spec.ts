import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeMessageItemComponent } from './home-message-item.component';

describe('HomeMessageItemComponent', () => {
  let component: HomeMessageItemComponent;
  let fixture: ComponentFixture<HomeMessageItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeMessageItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeMessageItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

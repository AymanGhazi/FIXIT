import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeNotificationItemComponent } from './home-notification-item.component';

describe('HomeNotificationItemComponent', () => {
  let component: HomeNotificationItemComponent;
  let fixture: ComponentFixture<HomeNotificationItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeNotificationItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeNotificationItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

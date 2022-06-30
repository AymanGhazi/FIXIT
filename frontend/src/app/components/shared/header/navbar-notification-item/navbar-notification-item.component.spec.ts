import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarNotificationItemComponent } from './navbar-notification-item.component';

describe('NavbarNotificationItemComponent', () => {
  let component: NavbarNotificationItemComponent;
  let fixture: ComponentFixture<NavbarNotificationItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarNotificationItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarNotificationItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

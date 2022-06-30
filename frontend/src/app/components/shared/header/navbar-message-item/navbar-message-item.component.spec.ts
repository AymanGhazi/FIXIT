import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarMessageItemComponent } from './navbar-message-item.component';

describe('NavbarMessageItemComponent', () => {
  let component: NavbarMessageItemComponent;
  let fixture: ComponentFixture<NavbarMessageItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarMessageItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarMessageItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

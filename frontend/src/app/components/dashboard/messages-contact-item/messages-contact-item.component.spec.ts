import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagesContactItemComponent } from './messages-contact-item.component';

describe('MessagesContactItemComponent', () => {
  let component: MessagesContactItemComponent;
  let fixture: ComponentFixture<MessagesContactItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessagesContactItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MessagesContactItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

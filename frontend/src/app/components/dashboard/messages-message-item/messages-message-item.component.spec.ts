import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagesMessageItemComponent } from './messages-message-item.component';

describe('MessagesMessageItemComponent', () => {
  let component: MessagesMessageItemComponent;
  let fixture: ComponentFixture<MessagesMessageItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessagesMessageItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MessagesMessageItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

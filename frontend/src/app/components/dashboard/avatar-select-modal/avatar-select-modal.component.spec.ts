import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvatarSelectModalComponent } from './avatar-select-modal.component';

describe('AvatarSelectModalComponent', () => {
  let component: AvatarSelectModalComponent;
  let fixture: ComponentFixture<AvatarSelectModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvatarSelectModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AvatarSelectModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

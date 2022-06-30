import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GallaryModalComponent } from './gallary-modal.component';

describe('GallaryModalComponent', () => {
  let component: GallaryModalComponent;
  let fixture: ComponentFixture<GallaryModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GallaryModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GallaryModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

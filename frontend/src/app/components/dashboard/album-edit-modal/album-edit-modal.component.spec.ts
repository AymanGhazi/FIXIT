import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumEditModalComponent } from './album-edit-modal.component';

describe('AlbumEditModalComponent', () => {
  let component: AlbumEditModalComponent;
  let fixture: ComponentFixture<AlbumEditModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlbumEditModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumEditModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchTechnicianItemComponent } from './search-technician-item.component';

describe('TechnicianItemComponent', () => {
  let component: SearchTechnicianItemComponent;
  let fixture: ComponentFixture<SearchTechnicianItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchTechnicianItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchTechnicianItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

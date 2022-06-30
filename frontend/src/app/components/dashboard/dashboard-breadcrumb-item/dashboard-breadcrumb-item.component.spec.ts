import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardBreadcrumbItemComponent } from './dashboard-breadcrumb-item.component';

describe('DashboardBreadcrumbItemComponent', () => {
  let component: DashboardBreadcrumbItemComponent;
  let fixture: ComponentFixture<DashboardBreadcrumbItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardBreadcrumbItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardBreadcrumbItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

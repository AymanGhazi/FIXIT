import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookmarksBookmarkItemComponent } from './bookmarks-bookmark-item.component';

describe('BookmarksBookmarkItemComponent', () => {
  let component: BookmarksBookmarkItemComponent;
  let fixture: ComponentFixture<BookmarksBookmarkItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookmarksBookmarkItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookmarksBookmarkItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

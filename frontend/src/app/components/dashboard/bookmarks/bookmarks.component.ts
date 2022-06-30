import { Component, OnInit } from '@angular/core';
import { BookmarkItem } from 'src/app/interfaces/bookmarkItem';
import { DashboardService } from 'src/app/services/dashboard.service';
@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.scss']
})
export class BookmarksComponent implements OnInit {

  bookmarks!: BookmarkItem[];

  constructor(private dashboardService: DashboardService) {
  }

  ngOnInit(): void {
    this.getBookmarks()
  }
  getBookmarks(){
   this.dashboardService.getDashboardBookmarks().subscribe(bookmark=>{
    this.bookmarks=bookmark
    
   })

  }

}

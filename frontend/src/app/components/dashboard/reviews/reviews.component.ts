import { Component, OnInit } from '@angular/core';
import { ReviewItem } from 'src/app/interfaces/reviewItem';
import { DashboardService } from 'src/app/services/dashboard.service';
import { BookmarkItem } from './../../../interfaces/bookmarkItem';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent implements OnInit {

  reviews: BookmarkItem[]=[];
  
  constructor(private dashboardService: DashboardService) {
  }

  ngOnInit(): void {
    this.getReviews()
  }
  getReviews(){
    this.dashboardService.getDashboardBookmarks().subscribe(review=>{
      this.reviews=review
    })

  }

}

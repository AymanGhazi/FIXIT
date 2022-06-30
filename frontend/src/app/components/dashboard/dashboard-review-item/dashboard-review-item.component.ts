import { Component, OnInit, Input } from '@angular/core';
import { ReviewItem } from 'src/app/interfaces/reviewItem';

@Component({
  selector: 'app-dashboard-review-item',
  templateUrl: './dashboard-review-item.component.html',
  styleUrls: ['./dashboard-review-item.component.scss']
})
export class DashboardReviewItemComponent implements OnInit {

  @Input() reviewItem!: ReviewItem;

  constructor() { }

  ngOnInit(): void {
  }

}

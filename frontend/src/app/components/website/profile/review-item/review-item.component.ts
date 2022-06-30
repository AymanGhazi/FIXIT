import { Component, OnInit, Input } from '@angular/core';
import { ReviewItem } from 'src/app/interfaces/reviewItem';

@Component({
  selector: 'app-review-item',
  templateUrl: './review-item.component.html',
  styleUrls: ['./review-item.component.scss']
})

export class ReviewItemComponent implements OnInit {

  @Input() reviewItem!: ReviewItem;
  
  constructor() { }

  ngOnInit(): void {
  }

}

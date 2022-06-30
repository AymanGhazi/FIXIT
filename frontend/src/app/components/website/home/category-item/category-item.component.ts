import { Component, OnInit, Input } from '@angular/core';
import { CategoryItem } from 'src/app/interfaces/front/home-category-item';

@Component({
  selector: 'app-category-item',
  templateUrl: './category-item.component.html',
  styleUrls: ['./category-item.component.scss']
})
export class CategoryItemComponent implements OnInit {

  @Input() categoryItem!: CategoryItem;

  constructor() { }

  ngOnInit(): void {
  }

}

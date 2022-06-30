import { Component, OnInit } from '@angular/core';
import { CategoryItem } from "../../../../interfaces/front/home-category-item"
import { FrontendServiceService } from './../../../../services/frontend-service.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  categoryItems: CategoryItem[] = [];

  constructor(private frontService: FrontendServiceService) {
     this.frontService.getCategories().subscribe(cat=>{
      this.categoryItems=cat
     })
  }

  ngOnInit(): void {}

}

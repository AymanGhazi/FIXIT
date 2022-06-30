import { Component, OnInit, Input } from '@angular/core';
import { CategoryOptionItem } from 'src/app/interfaces/categoryOptionItem';

import { TechnicianItem } from 'src/app/interfaces/front/home-technician-item';
import { Pagination } from 'src/app/interfaces/pagination';
import { FrontendServiceService } from './../../../../services/frontend-service.service';
import { locations } from 'src/app/interfaces/locations';
import { filter, map, single } from 'rxjs';
import { areaItem } from './../../../../interfaces/areaOptionItem';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  @Input() categoryOptions!: CategoryOptionItem[];
  @Input() cityOptions!: locations[];
  @Input() areaOptions!: areaItem[];
  @Input() technicians!: TechnicianItem[];
  pagination!: Pagination;
  
  constructor( private frontService: FrontendServiceService) {
    this.pagination = {totalItems: 500};
  }

  ngOnInit(): void {
    this.getcategories()
    this.getcities()
    
  }

  getcategories(){
  this.frontService.getCategories().subscribe(categories=>{
    this.categoryOptions=categories
  })}
  getcities(){
    this.frontService.getLocations().subscribe(cities=>{
      this.cityOptions=cities
    })
  }

  getareasOfCity(select:any|null){
   this.frontService.getACity(select.value).subscribe(areas=>{
    this.areaOptions=areas.areas
   })
  }

  search(){
   // this.frontService.searchTechnicians().subscribe(reslts=>{})
    //pagination
  }



  

}

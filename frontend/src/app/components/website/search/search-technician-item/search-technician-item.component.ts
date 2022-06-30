import { Component, OnInit, Input } from '@angular/core';
import { TechnicianItem } from 'src/app/interfaces/front/home-technician-item';

@Component({
  selector: 'app-search-technician-item',
  templateUrl: './search-technician-item.component.html',
  styleUrls: ['./search-technician-item.component.scss']
})
export class SearchTechnicianItemComponent implements OnInit {

  @Input() technician!: TechnicianItem;

  constructor() { }

  ngOnInit(): void {
  }

}

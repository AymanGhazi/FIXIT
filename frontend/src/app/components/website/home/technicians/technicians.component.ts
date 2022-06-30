import { Component, OnInit } from '@angular/core';
import { TechnicianItem } from "../../../../interfaces/front/home-technician-item"
import { FrontendServiceService } from './../../../../services/frontend-service.service';

@Component({
  selector: 'app-technicians',
  templateUrl: './technicians.component.html',
  styleUrls: ['./technicians.component.scss']
})
export class TechniciansComponent implements OnInit {

  technicianItems: TechnicianItem[] = [];

  constructor(private frontService: FrontendServiceService) {
    this.frontService.getHomeTechnicians().subscribe(tech=>{
      this.technicianItems=tech
    })
  }

  ngOnInit(): void {
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { TechnicianItem } from '../../../../interfaces/front/home-technician-item';
import { FrontendServiceService } from './../../../../services/frontend-service.service';

@Component({
  selector: 'app-technician-item',
  templateUrl: './technician-item.component.html',
  styleUrls: ['./technician-item.component.scss']
})
export class TechnicianItemComponent implements OnInit {
avatar=""

  @Input() technicianItem!: TechnicianItem;
  constructor() { }

  ngOnInit(): void {
   var avatarId= this.technicianItem.avatarId
   this.avatar=`/assets/avatars/avatar-${avatarId}.png`
   
  }

}

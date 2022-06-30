import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/services/dashboard.service';
import { MessageItem } from './../../../../interfaces/messageItem';
import { take } from 'rxjs';

@Component({
  selector: 'app-navbar-message-item',
  templateUrl: './navbar-message-item.component.html',
  styleUrls: ['./navbar-message-item.component.scss']
})
export class NavbarMessageItemComponent implements OnInit {
  messages!:MessageItem[]
  constructor(private dashboardService:DashboardService) { }

  ngOnInit(): void {
    this.getRecentMessages()
  }

  getRecentMessages(){
    this.dashboardService.getRecentmessages().pipe(take(4)).subscribe(messages=>{
      this.messages= messages.slice(0,4)
    })
  }


}

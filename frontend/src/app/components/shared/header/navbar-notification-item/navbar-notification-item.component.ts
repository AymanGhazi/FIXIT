import { Component, OnInit } from '@angular/core';
import { NotificationItem } from 'src/app/interfaces/notificationItem';
import { notifications } from 'src/app/interfaces/Notifications';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-navbar-notification-item',
  templateUrl: './navbar-notification-item.component.html',
  styleUrls: ['./navbar-notification-item.component.scss']
})
export class NavbarNotificationItemComponent implements OnInit {
  notifications!:notifications
  constructor(private AccountService:AccountService) { }

  ngOnInit(): void {
    this.getNotificarions()
  }
  getNotificarions(){
    this.AccountService.Getnotifications().subscribe(notification=>{
      
      this.notifications=notification
      console.log(this.notifications)
     
    })
  } 

}

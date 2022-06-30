import { Component, OnInit } from '@angular/core';
import { DashboardInfo } from 'src/app/interfaces/dashboard/dashboard-info';
import { DashboardService } from 'src/app/services/dashboard.service';
import { AccountService } from 'src/app/services/account.service';
import { NotificationItem } from './../../../interfaces/notificationItem';
import { ReviewItem } from 'src/app/interfaces/reviewItem';
import { notifications } from 'src/app/interfaces/Notifications';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {

  dashboardInfo: DashboardInfo={
        totalReviews: 0,
        totalMessages: 0,
        totalBookmarks: 0
    }

  notifications: NotificationItem[]=[]
  reviews!: ReviewItem[]

  constructor(private dashboardService: DashboardService,
    private AccountService:AccountService) {

      //remove
      this.getDashboardSettings()
  }

      ngOnInit(): void {
      this.getDashboardInfo()
      this.getDashboardNotifications()
      this.getDashboardReviews()
      }

      getDashboardInfo(){
      this.dashboardService.getDashboardInfo().subscribe(info=>{
        this.dashboardInfo=info
      });
      }
      getDashboardNotifications(){
      this.AccountService.Getnotifications().subscribe(notifications=>{
      this.notifications=notifications.items
      });
      }
      getDashboardReviews(){
      this.dashboardService.getDashboardReviews().subscribe(reviews=>{
      this.reviews=reviews
      });
  }

  //for test
    getDashboardSettings(){
      this.dashboardService.getDashboardSettings().subscribe(user=>{
        console.log(user)
      })
    }

}

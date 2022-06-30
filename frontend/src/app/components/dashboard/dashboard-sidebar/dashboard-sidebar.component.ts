import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/services/account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-sidebar',
  templateUrl: './dashboard-sidebar.component.html',
  styleUrls: ['./dashboard-sidebar.component.scss']
})
export class DashboardSidebarComponent implements OnInit {

  constructor(private accountService:AccountService,
    private Router:Router) { }
    currentRoute=this.Router.url

  ngOnInit(): void {
   console.log(this.currentRoute);
  }
  logOut(){
    //subscribe here and remove the local storage object
    this.accountService.signOut()
    this.Router.navigateByUrl("/")


  }
}

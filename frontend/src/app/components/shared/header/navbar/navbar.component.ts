import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs';
import { AccountService } from 'src/app/services/account.service';
import { account } from './../../../../interfaces/account';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
    currentuser!:account
  // notifications | messages | settings
  openedMenu!: string;
  
  constructor(public accountService:AccountService,
     private router:Router) { }

  ngOnInit(): void {
     this.accountService.currentUser$.subscribe(account=>{
      this.currentuser =account
     })
  }
 
  openMenu(menuToOpen: string): void {
    setTimeout(()=> {
      this.openedMenu = menuToOpen;
    }, 200);
  }
  logOut(){
    //subscribe here and remove the local storage object
    this.router.navigateByUrl("/")
    this.accountService.signOut()
  }
  

}

import { Component } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { account } from './interfaces/account';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  title = 'Fixit';
  
  constructor(private spinner:NgxSpinnerService,
    private accountService:AccountService){

  }
  ngOnInit(): void {
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 1000);
    
    this.SetCurrentUser();
  }
SetCurrentUser(){
    const userAsObj:account=JSON.parse(localStorage.getItem('account')!)  
    if (userAsObj) {
    this.accountService.setcurrentuser(userAsObj);
    }
}

}


import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.scss']
})
export class HelpComponent implements OnInit {
  validationSummery:string[]=[]
validate:boolean=true
display: any;
Isresend:boolean=false
ValidPhoneNumber=false
public timerInterval: any; 
  constructor(private router:Router) { }

  ngOnInit(): void {
  }


key=new FormControl('',[
  Validators.required
])
phone=new FormControl('',[
  Validators.required
])
changePasswordForm:FormGroup=new FormGroup({
  Key:this.key,
  phone:this.phone
})


sendKey(){
   if (this.phone.errors ==null) {
  this.validate=false
  this.timer(1);
 }else{
 this.validationSummery.push("Please enter a valid Phone Number")
 }


}
resend(){
  this.sendKey()
}

  timer(minute:number) {
    // let minute = 1;
    let seconds: number = minute * 60;
    let textSec: any = '0';
    let statSec: number = 60;

    const prefix = minute < 10 ? '0' : '';

    this.timerInterval = setInterval(() => {
      seconds--;
      if (statSec != 0) statSec--;
      else statSec = 59;

      if (statSec < 10) {
        textSec = '0' + statSec;
      } else textSec = statSec;

      this.display = `${prefix}${Math.floor(seconds / 60)}:${textSec}`;

      if (seconds == 0) {
        console.log('finished');
        this.Isresend=true
        clearInterval(this.timerInterval);
      }
      
    }, 1000);
  }
submitKey(){
  this.ValidPhoneNumber=true
}
changePassword(){
console.log(this.changePasswordForm.value)
this.router.navigateByUrl('/changepassword')

}
}

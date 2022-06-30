import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Registervalidators } from 'src/app/auth/validators/register-validators';


@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
password=new FormControl('',[
  Validators.required,
 
])

confirmPassword=new FormControl('',[
  Validators.required,

])

changePasswordFrom:FormGroup=new FormGroup({

 
  password:this.password,
  confirmPassword:this.confirmPassword,
 
},[Registervalidators.match('password','confirmPassword')]);

submit(){
console.log(this.changePasswordFrom.value)
}
}

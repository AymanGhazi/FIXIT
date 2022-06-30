import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AccountService } from 'src/app/services/account.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  constructor(private accountService:AccountService
    ,private router:Router,
    private toaster:ToastrService) { }

 
  ngOnInit(): void {
  }
  phone=new FormControl('',[
      Validators.required,
    
    ])
  password=new FormControl('',[
      Validators.required
    ])

  loginForm:FormGroup=new FormGroup({
    phone:this.phone,
    password:this.password  
    })

  signin(){
    this.accountService.signIn(this.phone.value,this.password.value).subscribe((account)=>{
      this.router.navigateByUrl('/dashboard')
      this.toaster.success("successfull signin","Success",{positionClass:"toast-bottom-right"})
    })
  }

}

import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Registervalidators } from 'src/app/auth/validators/register-validators';
import { registerCategoryvalidators } from './../../../../auth/validators/categoryValidation';
import { FrontendServiceService } from './../../../../services/frontend-service.service';
import { CategoryItem } from 'src/app/interfaces/front/home-category-item';
import { AccountService } from 'src/app/services/account.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  marginleft=" margin-left: 45px;"
  isTechnician:boolean=false
  validate:boolean=true
  display: any;
  Isresend:boolean=false
  public timerInterval: any;  
  @Output() cancelRegister=new EventEmitter
  InSubmission=false
  validationsErrors:string[]=[]
  categories:CategoryItem[]=[]
   registerForm=this.FB.group({})

  constructor(private FB:FormBuilder,private FrontendServiceService:FrontendServiceService,
    private AccountService:AccountService,
    private ToastrService:ToastrService,
    private router:Router) { }

 

    phone=new FormControl('',[
      Validators.required,
      
    ])
    password=new FormControl('',[
      Validators.required,
    
    ])

    confirmPassword=new FormControl('',[
      Validators.required,

    ])

    categoryId=new FormControl(-1,[
    ])
    changeCategory(e:any){
       this.categoryId?.setValue(e.target.value, {
      onlySelf: true,
    });
    }
    

    type=new FormControl('Customer',[
      Validators.required
    ])

    initializeForm(){
     this.registerForm=new FormGroup({
      phone:this.phone,
      password:this.password,
      confirmPassword:this.confirmPassword,
      categoryId:this.categoryId,
      type:this.type
    },[Registervalidators.match('password','confirmPassword'),registerCategoryvalidators.Typematch('type','categoryId')]);
    }
   
    
   ngOnInit(): void {
    this.initializeForm()
    this.getCategories()
      }
      

       get control () {
    return this.registerForm.controls as any
  }
    onItemChange(e:Event){
     if ( this.type.value==="Technician") {
    this.isTechnician=true
    }
    if ( this.type.value==="Customer") {
    this.isTechnician=false
    }
      }
      sendKey(){
      var phone=this.phone.value
      this.validate=false
      this.timer(1);

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
        this.Isresend=true
        clearInterval(this.timerInterval);
      }
      
    }, 1000);
  }

  getCategories(){
    this.FrontendServiceService.getCategories().subscribe(category=>{
      this.categories=category
    })
  }
  register(){  
    console.log(this.registerForm.value);
    this.AccountService.signUp(this.registerForm.value).subscribe(account=>{
      console.log(account)
      this.ToastrService.success("Account has been created")
      this.router.navigateByUrl("/dashboard")
      
    })
  
}
}

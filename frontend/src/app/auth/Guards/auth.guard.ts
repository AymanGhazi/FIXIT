import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable, map, catchError } from 'rxjs';
import { AccountService } from 'src/app/services/account.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private accountService:AccountService,
    private toastr:ToastrService,
    private router:Router
    ){}

  canActivate(): Observable<boolean > {
    
    return this.accountService.currentUser$.pipe(
      map(user=>{
        if(user){
          console.log("OKKKKKK");
          
          return true;
        }
        else{
          console.log("Nooooooooo");

        this.toastr.error("you shall not pass! ");
         this.router.navigateByUrl("/")

         return false}
    })
    );
  }
  
}

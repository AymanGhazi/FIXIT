import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { account } from '../interfaces/account';
import { map, ReplaySubject } from 'rxjs';
import { NotificationItem } from 'src/app/interfaces/notificationItem';
import { notifications } from '../interfaces/Notifications';


@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private HttpClient:HttpClient) { }
  baseUrl=environment.apiUrl
  private CurrentUserSource=new ReplaySubject<account|any>(1)
  currentUser$=this.CurrentUserSource.asObservable()


  ping(): void {


  }


  signUp(account:account) {
  return  this.HttpClient.post<account>(this.baseUrl+"/users",account)
  }
  

  signIn(username:string,password:string) {
    //?username=01234567891&password=password shpuld be attached to the url
   return this.HttpClient.get<account>(this.baseUrl+"/users/1").pipe(
        map((response:account)=>{
          const account=response;
          if(account){
            this.setcurrentuser(account)
          }}
          )
        )
  }
  setcurrentuser(user:account){
    localStorage.setItem("account",JSON.stringify(user))
    this.CurrentUserSource.next(user)

  }

  signOut(): void {
    //should make end point signout and request then in subscribe write this (component) navbar or dashboard right side
    localStorage.removeItem("account")
    this.CurrentUserSource.next(null)
    
  }

  resetPassword(): void {
    
  }

  setNewPassword(): void {
    
  }
  Getnotifications(){
   return this.HttpClient.get<notifications>(this.baseUrl+"/notifications")
  }


  
}

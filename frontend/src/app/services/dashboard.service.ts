import { Injectable } from '@angular/core';
import { BookmarkItem } from '../interfaces/bookmarkItem';
import { DashboardInfo } from '../interfaces/dashboard/dashboard-info';
import { ReviewItem } from '../interfaces/reviewItem';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { galleries } from '../interfaces/galleries';
import { dashboardSettings } from './../interfaces/DashboardSettings';
import { contacts } from '../interfaces/contacts';
import { MessageItem } from './../interfaces/messageItem';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  baseUrl=environment.apiUrl
  constructor(private HttpClient:HttpClient) { }

  getDashboardInfo() {
    return this.HttpClient.get<DashboardInfo>(this.baseUrl+"/dashboardInfo")
  }

  getDashboardReviews() {
   return this.HttpClient.get<ReviewItem[]>(this.baseUrl+"/reviews")
  }

  getDashboardBookmarks() {
  return  this.HttpClient.get<BookmarkItem[]>(this.baseUrl+"/bookmarks")
  }
  getDashboardSettings() {
    return this.HttpClient.get<dashboardSettings>(this.baseUrl+"/dashboardSettings")
  }
  getlocations(){
   return this.HttpClient.get(this.baseUrl+"/locations")
  }
 
 
  GetContacts(){
   return this.HttpClient.get<contacts[]>(this.baseUrl+"/contacts")
  }

  
  getGallaries(){
    return this.HttpClient.get<galleries[]>(this.baseUrl+"/galleries")
    } 
    removeAlbum(albumId:number){
      this.HttpClient.delete(this.baseUrl+"/photo/"+albumId)
    } 
     removePhoto(photoId:number){
      this.HttpClient.delete(this.baseUrl+"/photo/"+photoId)
    } 
    
  updateProfileInfo(userInfo:dashboardSettings){
    return  this.HttpClient.post<dashboardSettings>(this.baseUrl+"/dashboardSettings",userInfo)
    }
//note you should get messages of a contact
  getMessagesOfcontacts(ContactId:number){
    return this.HttpClient.get<MessageItem[]>(this.baseUrl+"/messages/")
  }
  getRecentmessages(){
    return this.HttpClient.get<MessageItem[]>(this.baseUrl+"/messages")
  }
  
  sendMessage(message:MessageItem){
      return this.HttpClient.post(this.baseUrl+"/messages",message)
  }



}

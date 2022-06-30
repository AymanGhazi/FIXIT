import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CategoryItem } from '../interfaces/front/home-category-item';
import { TechnicianItem } from 'src/app/interfaces/front/home-technician-item';
import { galleries } from '../interfaces/galleries';
import { ReviewItem } from 'src/app/interfaces/reviewItem';
import { locations } from '../interfaces/locations';
import { areaItem } from './../interfaces/areaOptionItem';
@Injectable({
  providedIn: 'root'
})
export class FrontendServiceService {
baseUrl=environment.apiUrl
categories:CategoryItem[]=[]
  constructor(private httpClient:HttpClient) { }
  

    getGallaries(){
    return this.httpClient.get<galleries[]>(this.baseUrl+"/galleries")
    } 
    getCategories(){
      return this.httpClient.get<CategoryItem[]>(this.baseUrl+"/categories")
    }
    getHomeTechnicians(){
    return this.httpClient.get<TechnicianItem[]>(this.baseUrl+"/Technicians")
    }
    getTechnicianProfile(TechnicianId:string|null|number){
    return this.httpClient.get<TechnicianItem>(this.baseUrl+"/Technicians/"+TechnicianId)
    }
    //note you should get a specific reviews for a technician but json server can not handle 
    getProfileReviews(TechnicianId:number){
      return this.httpClient.get<ReviewItem[]>(this.baseUrl+"/reviews/")
    }
    //note you should add a specific reviews for a technician but json server can not handle 

    addProfileReview(TechnicianId:number,review:ReviewItem){
    return this.httpClient.post<ReviewItem>(this.baseUrl+"/reviews",review)
    }

    //attach city id
    getLocations(){
       return this.httpClient.get<locations[]>(this.baseUrl+"/locations")
    }
    getACity(cityId:number){
       return this.httpClient.get<locations>(this.baseUrl+"/locations/"+cityId)
    }

    //object
    searchTechnicians(search:any) {
       return this.httpClient.post(this.baseUrl+"/search",search)
    }
    
     bookmarkTechnician(technicanid:number) {
    
  
    }

    unbookmarkTechnician(technicanid:number) {
    
    }


  
}
  
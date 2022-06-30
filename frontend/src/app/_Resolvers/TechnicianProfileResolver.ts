import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";

import { FrontendServiceService } from '../services/frontend-service.service';
import { TechnicianItem } from 'src/app/interfaces/front/home-technician-item';

@Injectable({
    providedIn :'root'
})
export class TechnicianProfileResolver implements Resolve<TechnicianItem>{
  constructor(private FrontendServiceService:FrontendServiceService){
    }
    
    resolve(route: ActivatedRouteSnapshot):Observable<TechnicianItem> {
    
     return this.FrontendServiceService.getTechnicianProfile(route.paramMap.get('id'))
    }
      

}
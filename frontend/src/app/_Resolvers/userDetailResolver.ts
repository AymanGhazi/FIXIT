import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { FrontendServiceService } from '../services/frontend-service.service';

import { DashboardService } from './../services/dashboard.service';
import { dashboardSettings } from "../interfaces/DashboardSettings";

@Injectable({
    providedIn :'root'
})
export class userDetailResolver implements Resolve<dashboardSettings>{
  constructor(private DashboardService:DashboardService){
    }
    resolve(route: ActivatedRouteSnapshot):Observable<dashboardSettings> {
    
     return this.DashboardService.getDashboardSettings()
    }
      

}
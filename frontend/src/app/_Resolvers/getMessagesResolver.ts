import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { FrontendServiceService } from '../services/frontend-service.service';

import { DashboardService } from './../services/dashboard.service';
import { dashboardSettings } from "../interfaces/DashboardSettings";
import { contacts } from 'src/app/interfaces/contacts';

@Injectable({
    providedIn :'root'
})
export class getMessagesResolver implements Resolve<contacts[]>{
  constructor(private DashboardService:DashboardService){
    }
    resolve(route: ActivatedRouteSnapshot):Observable<contacts[]> {
     return this.DashboardService.GetContacts()
    }
      

}
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TechnicianProfileResolver } from 'src/app/_Resolvers/TechnicianProfileResolver';
import { DashboardRoutingModule } from '../dashboard/dashboard-routing.module';
import { ChangePasswordComponent } from './account/change-password/change-password.component';
import { HelpComponent } from './account/help/help.component';
import { SigninComponent } from './account/signin/signin.component';
import { SignupComponent } from './account/signup/signup.component';
import { HomeComponent } from './home/home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

import { ProfileComponent } from './profile/profile/profile.component';
import { SearchComponent } from './search/search/search.component';

const routes: Routes = [
  { path:"", component:HomeComponent},
  { path:"search", component:SearchComponent },
  { path:"profile/:id", component:ProfileComponent,resolve:{technicianinfo:TechnicianProfileResolver} },
  { path:"signin", component:SigninComponent },
  { path:"signup", component:SignupComponent },
  { path:"help", component:HelpComponent },
  { path:"changepassword", component:ChangePasswordComponent },

  { path:"**", component:NotFoundComponent },

];   

@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration:"enabled"}),
DashboardRoutingModule],
  exports: [RouterModule]
})
export class WebsiteRoutingModule { }

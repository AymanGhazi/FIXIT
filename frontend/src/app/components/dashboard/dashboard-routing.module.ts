import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookmarksComponent } from './bookmarks/bookmarks.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MessagesComponent } from './messages/messages.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { SettingsComponent } from './settings/settings.component';
import { userDetailResolver } from './../../_Resolvers/userDetailResolver';
import { getMessagesResolver } from 'src/app/_Resolvers/getMessagesResolver';
import { AlbumsComponent } from './albums/albums.component';
import { AuthGuard } from 'src/app/auth/Guards/auth.guard';
import { HomeComponent } from '../website/home/home/home.component';

const routes: Routes = [
  {
    path:"dashboard",runGuardsAndResolvers:"always",canActivate:[AuthGuard], children:
    [
      { path:"", component:DashboardComponent },
      { path:"messages", component:MessagesComponent,resolve:{contacts:getMessagesResolver} },
      { path:"bookmarks", component:BookmarksComponent},
      { path:"reviews", component:ReviewsComponent },
      { path:"albums", component:AlbumsComponent },
      { path:"settings", component:SettingsComponent,resolve:{settings:userDetailResolver} }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
exports: [RouterModule],
 providers: [ AuthGuard ]
})
export class DashboardRoutingModule { }

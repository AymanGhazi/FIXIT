import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeMessageItemComponent } from './home-message-item/home-message-item.component';
import { HomeNotificationItemComponent } from './home-notification-item/home-notification-item.component';
import { MessagesComponent } from './messages/messages.component';
import { MessagesContactItemComponent } from './messages-contact-item/messages-contact-item.component';
import { MessagesMessageItemComponent } from './messages-message-item/messages-message-item.component';
import { BookmarksComponent } from './bookmarks/bookmarks.component';
import { BookmarksBookmarkItemComponent } from './bookmarks-bookmark-item/bookmarks-bookmark-item.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { ReviewsReviewItemComponent } from './reviews-review-item/reviews-review-item.component';
import { DashboardSidebarComponent } from './dashboard-sidebar/dashboard-sidebar.component';
import { DashboardFooterComponent } from './dashboard-footer/dashboard-footer.component';
import { SettingsComponent } from './settings/settings.component';
import { DashboardBreadcrumbItemComponent } from './dashboard-breadcrumb-item/dashboard-breadcrumb-item.component';
import { SharedModule } from '../shared/shared.module';
import { DashboardReviewItemComponent } from './dashboard-review-item/dashboard-review-item.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ToastrModule } from 'ngx-toastr';

import { NgxGalleryModule } from '@kolkov/ngx-gallery';
import { AlbumEditModalComponent } from './album-edit-modal/album-edit-modal.component';
import { AuthModule } from 'src/app/auth/auth.module';
import { FileUploadModule } from 'ng2-file-upload';
import { AvatarSelectModalComponent } from './avatar-select-modal/avatar-select-modal.component';
import { AlbumsComponent } from './albums/albums.component';
import { AuthGuard } from 'src/app/auth/Guards/auth.guard';


@NgModule({
  declarations: [
    DashboardComponent,
    HomeMessageItemComponent,
    HomeNotificationItemComponent,
    MessagesComponent,
    MessagesContactItemComponent,
    MessagesMessageItemComponent,
    BookmarksComponent,
    BookmarksBookmarkItemComponent,
    ReviewsComponent,
    ReviewsReviewItemComponent,
    DashboardSidebarComponent,
    DashboardFooterComponent,
    SettingsComponent,
    DashboardBreadcrumbItemComponent,
    DashboardReviewItemComponent,
    AlbumEditModalComponent,
    AvatarSelectModalComponent,
    AlbumsComponent,
    

  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    AuthModule,
    ToastrModule.forRoot(),
    NgxGalleryModule,
    FormsModule,
    FileUploadModule, 
    
  ],
  providers:[AuthGuard]
})
export class DashboardModule { }

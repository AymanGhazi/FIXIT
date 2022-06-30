import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebsiteRoutingModule } from './website-routing.module';

import { CategoriesComponent } from './home/categories/categories.component';
import { TechniciansComponent } from './home/technicians/technicians.component';
import { IntroComponent } from './home/intro/intro.component';
import { HomeComponent } from './home/home/home.component';
import { CategoryItemComponent } from './home/category-item/category-item.component';
import { TechnicianItemComponent } from './home/technician-item/technician-item.component';
import { SearchComponent } from './search/search/search.component';
import { SearchTechnicianItemComponent } from './search/search-technician-item/search-technician-item.component';
import { ProfileComponent } from './profile/profile/profile.component';
import { AlbumItemComponent } from './profile/album-item/album-item.component';
import { PhotoItemComponent } from './profile/photo-item/photo-item.component';
import { ReviewItemComponent } from './profile/review-item/review-item.component';
import { SigninComponent } from './account/signin/signin.component';
import { SignupComponent } from './account/signup/signup.component';
import { FooterComponent } from './footer/footer.component'; 
import { SharedModule } from '../shared/shared.module';

import { AuthModule } from './../../auth/auth.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HelpComponent } from './account/help/help.component';
import { ChangePasswordComponent } from './account/change-password/change-password.component';
import { GallaryModalComponent } from './profile/gallary-modal/gallary-modal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxGalleryModule } from '@kolkov/ngx-gallery';
import { ReviewModalComponent } from './profile/review-modal/review-modal.component';
  import { RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    HomeComponent,
    CategoryItemComponent,
    TechnicianItemComponent,
    SearchComponent,
    SearchTechnicianItemComponent,
    ProfileComponent,
    AlbumItemComponent,
    PhotoItemComponent,
    ReviewItemComponent,
    SigninComponent,
    SignupComponent,
    CategoriesComponent,
    TechniciansComponent, 
    IntroComponent,
    FooterComponent,
    HelpComponent,
    ChangePasswordComponent,
    GallaryModalComponent,
    ReviewModalComponent,
    NotFoundComponent,
    
  ],
  imports: [
  CommonModule,
    SharedModule,
    AuthModule,
    ReactiveFormsModule,
     FormsModule,
    NgbModule,
    NgxGalleryModule,
    RouterModule,
    WebsiteRoutingModule

  ],
  exports: [
    FooterComponent
  ]
})
export class WebsiteModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from './header/navbar/navbar.component';
import { NavbarMessageItemComponent } from './header/navbar-message-item/navbar-message-item.component';
import { NavbarNotificationItemComponent } from './header/navbar-notification-item/navbar-notification-item.component';
import { RatingComponent } from './rating/rating.component';
import { PaginationComponent } from './pagination/pagination.component';
  import { RouterModule } from '@angular/router';
import { TimeagoModule } from 'ngx-timeago';
import { NgxMaskModule } from 'ngx-mask';

@NgModule({
  declarations: [
    NavbarComponent,
    NavbarMessageItemComponent,
    NavbarNotificationItemComponent,
    RatingComponent,
    PaginationComponent,

    
  ],
  imports: [
  CommonModule,
  RouterModule,
  TimeagoModule.forRoot(),
  NgxMaskModule.forRoot()
  ],
  exports:[
    NavbarComponent,
    NavbarMessageItemComponent,
    NavbarNotificationItemComponent,
    RatingComponent,
    PaginationComponent,
    RouterModule,
    TimeagoModule,
    NgxMaskModule

  ]
})
export class SharedModule { }

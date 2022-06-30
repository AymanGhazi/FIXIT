import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardRoutingModule } from './components/dashboard/dashboard-routing.module';
import { DashboardModule } from './components/dashboard/dashboard.module';
import { SharedModule } from './components/shared/shared.module';
import { WebsiteRoutingModule } from './components/website/website-routing.module';
import { WebsiteModule } from './components/website/website.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { NgxSpinnerModule } from 'ngx-spinner';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalModule } from 'ngx-bootstrap/modal';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuard } from './auth/Guards/auth.guard';




@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    DashboardModule,
    WebsiteRoutingModule,
    DashboardRoutingModule,
    RouterModule.forRoot([]),
    SharedModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    NgxSpinnerModule,
    NgbModule,
    ModalModule.forRoot(),
    HttpClientModule,
    WebsiteModule,
  ], 
  providers: [AuthGuard],
  bootstrap: [AppComponent],
   
})
export class AppModule { }
  
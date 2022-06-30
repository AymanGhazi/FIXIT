import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InputsComponent } from './inputs/inputs.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';



@NgModule({
  declarations: [
    InputsComponent,

  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot()
  ],exports:[
    InputsComponent
  ]
})
export class AuthModule { }
 
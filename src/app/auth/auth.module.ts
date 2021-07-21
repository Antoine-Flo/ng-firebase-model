import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './signin/signin.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [SigninComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class AuthModule { }

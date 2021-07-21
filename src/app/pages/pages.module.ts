import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SecretComponent } from './secret/secret.component';



@NgModule({
  declarations: [HomeComponent, SecretComponent],
  imports: [
    CommonModule
  ],
  exports: [SecretComponent]
})
export class PagesModule { }

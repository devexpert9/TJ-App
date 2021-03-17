import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AuthenticationOtpPage } from './authentication-otp.page';

const routes: Routes = [
  {
    path: '',
    component: AuthenticationOtpPage
  }
]; 

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AuthenticationOtpPage]
})
export class AuthenticationOtpPageModule {}

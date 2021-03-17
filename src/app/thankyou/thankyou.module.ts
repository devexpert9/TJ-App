import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { HeaderPageModule } from '../header/header.module';

import { ThankyouPage } from './thankyou.page';
import { SharedModule } from '../shared/shared.module';
const routes: Routes = [
  {
    path: '',
    component: ThankyouPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    SharedModule,
    HeaderPageModule
  ],
  declarations: [ThankyouPage]
})
export class ThankyouPageModule {}

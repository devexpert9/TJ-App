import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from '../shared/shared.module';
import { NotificationPage } from './notification.page';
import { HeaderPageModule } from '../header/header.module';
const routes: Routes = [
  {
    path: '',
    component: NotificationPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HeaderPageModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  declarations: [NotificationPage]
})
export class NotificationPageModule {}

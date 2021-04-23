import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from '../shared/shared.module';
import { HeaderPageModule } from '../header/header.module';

import { FollowPage } from './follow.page';

const routes: Routes = [
  {
    path: '',
    component: FollowPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HeaderPageModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FollowPage]
})
export class FollowPageModule {}

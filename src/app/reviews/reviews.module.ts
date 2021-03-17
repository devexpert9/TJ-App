import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { SharedModule } from '../shared/shared.module';
import { ReviewsPage } from './reviews.page';
import { HeaderPageModule } from '../header/header.module';
const routes: Routes = [
  {
    path: '',
    component: ReviewsPage
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
  declarations: [ReviewsPage],
  entryComponents: [],
})
export class ReviewsPageModule {}

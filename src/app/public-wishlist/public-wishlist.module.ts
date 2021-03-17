import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from '../shared/shared.module';
import { NgxStarsModule } from 'ngx-stars';


import { PublicWishlistPage } from './public-wishlist.page';

const routes: Routes = [
  {
    path: '',
    component: PublicWishlistPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    SharedModule,
    NgxStarsModule
  ],
  declarations: [PublicWishlistPage]
})
export class PublicWishlistPageModule {}

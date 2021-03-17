import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { WishlistCheckoutPage } from './wishlist-checkout.page';
import { SharedModule } from '../shared/shared.module';
const routes: Routes = [
  { 
    path: '',
    component: WishlistCheckoutPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [WishlistCheckoutPage]
})
export class WishlistCheckoutPageModule {}

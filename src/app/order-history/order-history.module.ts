import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { OrderHistoryPage } from './order-history.page';
import { SharedModule } from '../shared/shared.module';
import { HeaderPageModule } from '../header/header.module';

const routes: Routes = [
  {
    path: '',
    component: OrderHistoryPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    HeaderPageModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  declarations: [OrderHistoryPage]
})
export class OrderHistoryPageModule {}

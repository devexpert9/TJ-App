import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from '../shared/shared.module';
import { MessagesPage } from './messages.page';
import { HeaderPageModule } from '../header/header.module';

const routes: Routes = [
  {
    path: '',
    component: MessagesPage
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
  declarations: [MessagesPage]
})
export class MessagesPageModule {}

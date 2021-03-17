import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { TermsConditionsPage } from './terms-conditions.page';
import { SharedModule } from '../shared/shared.module';
const routes: Routes = [
  {
    path: '',
    component: TermsConditionsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  declarations: [TermsConditionsPage]
})
export class TermsConditionsPageModule {}

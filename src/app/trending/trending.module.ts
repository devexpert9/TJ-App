import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from '../shared/shared.module';
import { NgxStarsModule } from 'ngx-stars';
import { HeaderPageModule } from '../header/header.module';

import { TrendingPage } from './trending.page';

const routes: Routes = [
  {
    path: '',
    component: TrendingPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    SharedModule,
    NgxStarsModule,
    HeaderPageModule
  ],
  declarations: [TrendingPage],
  entryComponents: [],
})
export class TrendingPageModule {}

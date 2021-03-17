import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AboutUsPage } from './about-us.page';
import { SharedModule } from '../shared/shared.module';
import { HeaderPageModule } from '../header/header.module';
const routes: Routes = [
  {
    path: '',
    component: AboutUsPage
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
  declarations: [AboutUsPage],
  entryComponents: [],
})
export class AboutUsPageModule {}

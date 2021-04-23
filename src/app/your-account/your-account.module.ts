import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { HeaderPageModule } from '../header/header.module';

import { YourAccountPage } from './your-account.page';
import { SharedModule } from '../shared/shared.module';

import { CKEditorModule } from 'ckeditor4-angular';

const routes: Routes = [
  {
    path: '',
    component: YourAccountPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CKEditorModule,
    HeaderPageModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  declarations: [YourAccountPage]
})
export class YourAccountPageModule {}

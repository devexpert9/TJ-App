import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { BlogDetailPage } from './blog-detail.page';
import { SharedModule } from '../shared/shared.module';
import { ShareButtonsModule } from 'ngx-sharebuttons';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { HeaderPageModule } from '../header/header.module';
const routes: Routes = [
  {
    path: '',
    component: BlogDetailPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    SharedModule,
    ShareButtonsModule.forRoot(),
    HttpClientModule,
	HeaderPageModule,
    HttpClientJsonpModule
  ],
  declarations: [BlogDetailPage],
  entryComponents: [],
})
export class BlogDetailPageModule {}

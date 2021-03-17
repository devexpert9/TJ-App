import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ProductDetailsPage } from './product-details.page';
import { SharedModule } from '../shared/shared.module';
import { NgxStarsModule } from 'ngx-stars';
import { OwlModule } from 'ngx-owl-carousel';
import { ShareButtonsModule } from 'ngx-sharebuttons';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { HeaderPageModule } from '../header/header.module';

const routes: Routes = [
  {
    path: '',
    component: ProductDetailsPage
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
    OwlModule,
    ShareButtonsModule.forRoot(),
    HttpClientModule,
    HttpClientJsonpModule,
    HeaderPageModule
  ],
  declarations: [ProductDetailsPage]
})
export class ProductDetailsPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { HomePage } from './home.page';
import { SharedModule } from '../shared/shared.module';
import { OwlModule } from 'ngx-owl-carousel';
import { NgxStarsModule } from 'ngx-stars';
import { HeaderPageModule } from '../header/header.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ]),
    SharedModule,
    OwlModule,
    NgxStarsModule,
	HeaderPageModule
  ],
  declarations: [HomePage],
    entryComponents: [],
})
export class HomePageModule {}

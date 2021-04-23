import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from '../shared/shared.module';
import { NgxStarsModule } from 'ngx-stars';
import { HeaderPageModule } from '../header/header.module';

import { SearchPage } from './search.page';

const routes: Routes = [
  {
    path: '',
    component: SearchPage
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
  declarations: [SearchPage],
  entryComponents: [],
})
export class SearchPageModule {}

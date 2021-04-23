import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from '../shared/shared.module';
import { BlogPage } from './blog.page';
import { HeaderPageModule } from '../header/header.module';
//import { CKEditorModule } from 'ng2-ckeditor';
import { CKEditorModule } from 'ckeditor4-angular';

//import {AccordionModule} from "ngx-accordion";

const routes: Routes = [
  {
    path: '',
    component: BlogPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CKEditorModule,
    RouterModule.forChild(routes),
    SharedModule,
    HeaderPageModule,
    //CKEditorModule
  ],
  declarations: [BlogPage],
  entryComponents: [],
})
export class BlogPageModule {}

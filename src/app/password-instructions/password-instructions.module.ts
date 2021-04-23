import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
// import { HomePage } from './home.page';
import { SharedModule } from '../shared/shared.module';
import { OwlModule } from 'ngx-owl-carousel';
import { NgxStarsModule } from 'ngx-stars';
import { HeaderPageModule } from '../header/header.module';
import { PasswordInstructionsPage } from './password-instructions.page';
// import { ProductsPage } from './products.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: PasswordInstructionsPage
      }
    ]),
    SharedModule,
    OwlModule,
    NgxStarsModule,
    HeaderPageModule
  ],
  declarations: [PasswordInstructionsPage],
    entryComponents: [],
})
export class PasswordInstructionsPageModule {}
